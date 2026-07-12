//import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { PostHeader } from "@/components/post-header";
import { PostContent } from "@/components/markdownContent";
import { RelatedPosts } from "@/components/related-posts"


type PostPageProps = {
    params: Promise<{ slug: string}>,
}

export function generateStaticParams () {
    

    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }))
};

 export async function  generateMetadata  ( { params }: PostPageProps) {
    const { slug } = await params;
    const post =  getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post not found"
        }
    }

      return {
         title: `${post.title} - FitnessBlog`,
         description: post.excerpt,
         openGraph: {
         title: post.title,
         description: post.excerpt,
         images: [post.image.src],
    },
  }
};

 export default async function PostPage ( { params }: PostPageProps) {
        const { slug } = await params;
        const post =   getPostBySlug(slug);
                                            
  
           if (!post) {
               return notFound();
           }
 
                                             
        const relatedPosts = getRelatedPosts(post.category, post.slug, 2)
         return (
            <main className="container mx-auto p-4 lg:w-5xl xl:w-6xl">
            <PostHeader post={post}/>
            <div className="lg:flex">
              <PostContent content={post.content}/>
             <RelatedPosts posts={relatedPosts}/>
           </div>
        </main>
       
    )
}