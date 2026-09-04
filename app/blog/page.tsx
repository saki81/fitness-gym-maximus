import { Pagination } from "@/components/pagination";
import { CategoryFilter } from "@/components/category-filter";
import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from "@/lib/posts";
import type  { Metadata } from "next";
import { PageHeroBanner } from "@/components/shared/page-hero-banner";


export const metadata: Metadata = {
    title: "Blog",
    description: "Savjeti za treninge, ishranu i suplementaciju fitness centra Maximus u Tesliću",
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
    const postPerPage = 6;

    const filteredPost = category 
          ? posts.filter((post) => post.category === category)
          : posts;
    
    const totalPage = Math.ceil(filteredPost.length / postPerPage);
    const startIndex = (currentPage - 1) * postPerPage;
    const paginatedPosts = filteredPost.slice(startIndex, startIndex + postPerPage)

    return (
      <>
      <PageHeroBanner title="Blog" description="Otkrijte najnovije članke o fitnesu, ishrani i suplementaciji"/>
        <section className="container mx-auto px-4 sm:px-0 py-12 xl:w-6xl">
      
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
        </>
    )

}