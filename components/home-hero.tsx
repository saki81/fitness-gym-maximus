import Image from "next/image";
import { getImageUrl } from "@/lib/imagekit";
import Link from "next/link";
import { Button } from "./ui/button";

export function HomeHero () {

    return (
      <section className="">
        <div className="relative bg-gradient-to-br dark:from-[#FFA52C]/10 dark:via-[#1a1a1a]/5 dark:to-[#dba258]/10 overflow-hidden">
            <div className="px-2 max-w-6xl mx-auto md:px-2 xl:px-0 py-10 md:py-12 lg:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                 
                   {/* text left side */}
                 <div className="px-2 md:px-2 text-center mt-16 md:text-left order-2 lg:order-1 pt-10 xl:px-0">
                      <h1 className="text-4xl lg:text-5xl tracking-wide font-bold">
                      FITNESS CENTAR{' '}
                      <span className="tracking-wide text-primary block mt-2">MAXIMUS</span>
                      </h1>

                      <h3 className="-tracking-tighter text-lg md:text-xl lg:text-xl mt-8 leading-relaxed ">
                          TERETANA U TESLIĆU ZA TRENING SNAGE, REKREACIJU I KONDICIJU
                      </h3>

                      
                      {/* buttons */}
                      <div className="px-2 md:px-0 flex flex-col sm:flex-row gap-4 mt-8">
                        <Link href="/blog">
                           <Button
                              size="lg"
                              className="w-full aria-label sm:w-auto tracking-wider font-bold cursor-pointer text-md">
                               PROČITAJTE BLOG
                           </Button>
                        </Link>
                        <Link href="/contact">
                           <Button
                              size="lg"
                              className="w-full bg-foreground aria-label sm:auto tracking-wider font-bold cursor-pointer text-md transition-all border-accent-foreground">
                               POČNITE SADA
                           </Button>
                        </Link>
                     </div>      
                 </div>
                  {/* right side */}
                  <div className="lg:order-2">  
                     <div className="inline">          
                      <Image 
                        className="hidden md:block" src={getImageUrl("fitness-maximus/hero-home/hero.png?updatedAt=1776531491064&tr=q-75")} 
                        alt="Fitness centar Maximus" 
                        width={460} 
                        height={600} 
                        priority
                        fetchPriority="high"/>  
                     </div>                 
                  </div>  
              </div>   
           </div>
        </div>
      </section>
    )
}