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
        <aside className="mt-0 p-1">
          <h2 className="text-2xl font-bold mb-4">Povezani clanci</h2> 
           <div className="grid md:grid-cols-1 lg:grid-cols-1 mx-auto justify-center">
             {posts.map((post) => (
                <Card key={post.slug} className="pt-0 group hover:shadow-lg transition-shadow mb-4">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video rounded-t-lg">
                     <Image
                       src={getImageUrl(post.image.src)}
                       alt={post.image.alt}
                       width={320}
                       height={60}
                       className="rounded-lg object-cover w-full h-full"/>
                    </div>
                    <div className="p-4 font-semibold">
                       {post.title}
                    </div>
                    
                  </Link>
                </Card>
             ))}
           </div>
        </aside>
    )
}