import Image from "next/image";
import { getImageUrl } from "@/lib/imagekit";
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
            width={1280}
            height={320}
            className="w-full rounded-lg object-cover object-top h-[180] sm:h-[390]"/>
         </div>  
       </div>
    )
}