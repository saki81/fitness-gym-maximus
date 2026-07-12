import Image from "next/image";
import { getImageUrl } from "@/lib/imagekit";
import { Calendar, Clock } from "lucide-react";
import { calculateReadingTime, formatDate } from "@/lib/utils";
import  { Post } from "@/lib/posts";

interface PostHeaderProps {
    post: Post;
}

export function PostHeader ( {post}: PostHeaderProps ) {
 

    return(
        <div className="mt-22">
         <div className="mb-4">
         <Image 
            src={getImageUrl(post?.image.src)}
            alt={post?.image.alt}
            width={1200}
            height={300}
            className="w-full md:h-[300] object-cover rounded-lg sm:h-[130] max-w-full"/>
         </div>  
       </div>
    )
}