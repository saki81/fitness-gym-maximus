import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { getImageUrl } from "@/lib/imagekit";
import Link from "next/link";
import { calculateReadingTime, formatDate } from "@/lib/utils";



interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  }
  image: {
    src: string;
    alt: string;
  }
  readingTime: number;
}

interface BlogCardProps {
    posts: Post[];
    category?: string;
};

export function BlogCard ({posts = []}: BlogCardProps) {
    
    const categoryColor = (cat: string) => {
        switch (cat) {
            case "ishrana":
              return "bg-green-100 text-green-800 hover:bg-green-200"
            case "suplementacija":
              return "bg-blue-100 text-blue-800 hover:bg-blue-200"
            case "trening":
              return "bg-orange-100 text-orange-800 hover:bg-orange-200"
            default:
              return "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           {posts.map((post) => (
              <Card key={post.slug} className="w-full h-full  relative overflow-hidden">
                <Link href={`/blog/${post.slug}`}>
                 <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={getImageUrl(post.image.src)}
                      alt={post.image.alt}
                      width={340}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>

                       <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 text-sm font-semibold rounded-full text-accent-foreground bg-accent shadow-lg"
                    >
                      {post.category}
                    </span>
                  </div>
                 </div>
                 <CardHeader className="p-6">
                   <div className="flex items-center justify-between mb-3">
                     <p className="text-sm  text-muted-foreground">{formatDate(post.date)}</p>
                     <span className="text-sm text-muted-foreground">{calculateReadingTime(post.content)} min citanja</span>
                   </div>
                   <h3 className="text-xl font-bold mb-3 group-hover:text-[#FFA52C] transition-colors text-foreground">
                        {post.title}
                   </h3>

                   <p className="text-sm text-foreground mt-3">{post.excerpt}</p> 
                 </CardHeader>
                
                </Link>
              </Card>
           ))}
        </div>
    )
}