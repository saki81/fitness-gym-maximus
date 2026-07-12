import Image from "next/image";
import { getImageUrl } from "@/lib/imagekit";
import Link from "next/link";
import { Button } from "./ui/button";

export function HomeHero () {

    return (
      <section className="">
        <div className="relative bg-gradient-to-br dark:from-[#FFA52C]/10 dark:via-[#1a1a1a]/5 dark:to-[#dba258]/10 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-4 lg:px-10 py-10 md:py-12 lg:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                 
                   {/* text left side */}
                 <div className="text-center mt-16 md:text-left order-2 lg:order-1 pt-10">
                      <h1 className="text-4xl lg:text-5xl tracking-wide font-bold">
                      PUT DO VAŠE{' '}
                      <span className="tracking-wide text-primary block mt-2">NAJBOLJE FORME</span>
                      </h1>

                      <h3 className="-tracking-tighter text-lg md:text-xl lg:text-xl mt-8 leading-relaxed ">
                          STRUČNI SAVJETI, EFIKASNI TRENINZI I PRAVILNA ISHRANA KOJA VAS VODI DO ŽELJENIH REZULTATA
                      </h3>
                      {/* buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
                     <div className="display:inline">          
                      <Image 
                        className="hidden md:block" src={getImageUrl("fitness-maximus/hero-home/hero.png?updatedAt=1776531491064&tr=q-80")} 
                        alt="home-hero" 
                        width={460} height={600} />  
                     </div>                 
                  </div>  
              </div>   
           </div>
        </div>
      </section>
    )
}