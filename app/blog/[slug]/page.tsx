//import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { PostHeader } from "@/components/post-header";
import { PostContent } from "@/components/markdownContent";
import { RelatedPosts } from "@/components/related-posts";
import { formatDate, calculateReadingTime} from "@/lib/utils";
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import  Link from "next/link"


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
         title: post.title, 
         description: post.excerpt,
         content: post.content,
         openGraph: {
         date: post.date,
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
 
                                             
        const relatedPosts = getRelatedPosts(
              post.category, 
              post.slug,
              post.relatedPosts
            )
         return (
            <main className="px-6 md:px-4 container mx-auto p-4 lg:px-4 xl:px-0 max-w-6xl text-foreground">
            <PostHeader post={post}/>
            <div className="max-w-5xl py-4 text-lg font-medium">
               <Link href="/blog" className="inline-flex items-center text-foreground hover:text-accent">
                  <ArrowLeft size={20} className="mr-1.5"/>
                  Nazad na Blog
               </Link>
             </div>
           
             <div className="text-3xl font-bold mt-10">{post.title}</div>
              <div className="pt-4 pb-10 flex">
                <div className="flex">                
                  <Calendar className="mr-2 text-accent"/> {formatDate(post.date)}  
              </div>
              <div className="flex ml-6">  
                  <Clock className="mr-2 text-accent"/> {calculateReadingTime(post.content)} min čitanja  
              </div> 
            </div>
             <div className="lg:flex pt-1">
              <div className="max-w-4xl">
                <PostContent content={post.content}/>
              </div>
               
               <RelatedPosts posts={relatedPosts}/>
             </div>
        </main>
       
    )
}