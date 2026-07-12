import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { getLatestPosts, type Post } from "@/lib/posts"
import { Button } from "./ui/button"
import { getImageUrl } from "@/lib/imagekit"


export function LatestPosts () {
 const recentPosts = getLatestPosts()

    return (
         <section className="py-16 md:py-18 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 ">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div className="text-center mx-auto tracking-wider">
              <h2 className="text-2xl md:text-4xl tracking-wide  font-medium mb-4 text-foreground">
                NAJNOVIJI ČLANCI
              </h2>
              <h3 className="text-base md:text-xl text-foreground">
                STRUČNI UVIDI PRAKTIČNI SAVJETI
              </h3>
            </div>
           
          </div>
          <div className="flex justify-end mb-8">
                <Link href="/blog">
              <Button 
                size="sm" 
                className= "font-semibold transition-all tracking-wider"
              >
                POGLEDAJTE SVE POSTOVE
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {recentPosts.map((post, index) => (
              <Link
                key={index} 
                href={`/blog/${post.slug}`}
                className="group bg-background rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                   <Image
                    src={ getImageUrl(post.image.src) }
                    alt={post.title}
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
                <div className="p-6">
                  <p className="text-sm mb-2 text-muted-foreground">{formatDate(post.date)}</p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#FFA52C] transition-colors text-foreground">
                    {post.title}
                  </h3>
                  <p className="text-sm text-foreground">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
}