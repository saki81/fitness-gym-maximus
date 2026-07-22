import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { BlogCard } from "./blog-card"
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
           <BlogCard posts={recentPosts} />
          
        </div>
      </section>
    )
}