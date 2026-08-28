import Link from "next/link";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { getImageUrl } from "@/lib/imagekit";
import { Post } from "@/lib/posts";
import Image from "next/image";

interface RelatedPostsProps {
    posts: Post[]
}


export  function RelatedPosts ( {posts}: RelatedPostsProps) {
    if (posts.length === 0) {
        return null;
    }

    return (  
      <aside className="px-1 mt-0 md:px-2 lg:pl-8"> 
          <h2 className="text-2xl font-bold mb-4">Povezani članci</h2> 
           <div className="container mx-auto px-0 grid grid-cols-1">
             {posts.map((post) => (
                <Card key={post.slug} className="pt-0 group hover:shadow-lg transition-shadow mb-4 w-full">
                  <Link href={`/blog/${post.slug}`}>
                    <CardHeader className=" rounded-t-lg ">
                     <Image
                       src={getImageUrl(post.image.src)}
                       alt={post.image.alt}
                       width={370}
                       height={110}
                       className="rounded-lg object-cover w-full h-full"/>
                    </CardHeader>
                    <CardContent className="p-4 font-semibold text-sm">
                       {post.title}
                    </CardContent>
                    
                  </Link>
                </Card>
             ))}
           </div>   
       </aside>
    )
}