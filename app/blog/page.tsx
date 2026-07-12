
import { Pagination } from "@/components/pagination";
import { CategoryFilter } from "@/components/category-filter";
import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from "@/lib/posts";
import type  { Metadata } from "next";


export const metadata: Metadata = {
    title: "Blog - Fitness blog",
    description: "Svi naši članci o ishrani, suplementaciji i treningu",
}

interface BlogPageProps {
  searchParams?: Promise<{
    category?: string;
    page?: string;
  }>;
}

export default async function blogPage ({searchParams}: BlogPageProps) {
    const params = await searchParams;

    const posts =  getAllPosts();
    const category = params?.category ?? undefined; 
    const currentPage = Number.parseInt(params?.page ?? "1", 10 );
    const postPerPage = 2;

    const filteredPost = category 
          ? posts.filter((post) => post.category === category)
          : posts;
    
    const totalPage = Math.ceil(filteredPost.length / postPerPage);
    const startIndex = (currentPage - 1) * postPerPage;
    const paginatedPosts = filteredPost.slice(startIndex, startIndex + postPerPage)

    return (
        <section className="container mx-auto px-4 py-12 xl:w-6xl">
          <div className="text-center mt-12">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">Otkrijte najnovije članke o fitnes-u, ishrani i suplementaciji</p>
          </div>
          <CategoryFilter currentCategory={category}/>
          {filteredPost.length === 0 
          ? <div className="flex items-center justify-center">
               <p className="pt-16 text-lg tracking-wide text-muted-foreground">Nema tema o ovoj kategoriju</p>
            </div>
          : <BlogCard 
             posts={paginatedPosts} 
             category={category}
             />
          }
          <Pagination 
             currentPage={currentPage}
             totalPage={totalPage}
             />
        </section>
    )

}