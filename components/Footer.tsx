import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";


export function Footer() {

    return (
        <footer className="bg-background w-full">
           <div className="container max-w-6xl mx-auto py-12 px-4 sm:px-0">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

               {/* <div> */}
                    <Link href="/" className="-mx-4">
                       <Image 
                          src="/logo-2.png"
                          alt="logo"
                          width={100}
                          height={100}/> 
                    </Link> 

              {/*  </div> */}
                 
                <div>
                   <h4 className="font-semibold mb-4 text-foreground text-lg">
                      KATEGORIJE
                   </h4>
                   <ul className="space-y-2 tracking-wider">
                     <li>
                        <Link href="/blog?category=ishrana" className="text-lg text-foreground hover:text-accent">
                            Ishrana
                        </Link>
                     </li>
                     <li>
                        <Link href="/blog?category=trening" className="text-lg text-foreground hover:text-accent">
                            Trening
                        </Link>
                     </li>
                     <li>
                        <Link href="/blog?category=suplementacija" className="text-lg text-foreground hover:text-accent">
                            Suplementacija
                        </Link>
                     </li>
                   </ul>
                </div>

                <div>
                   <h4 className="font-semibold mb-4 text-foreground text-lg">
                      STRANICE
                   </h4>
                   <ul className="space-y-2 tracking-wider">
                     <li>
                        <Link href="/home" className="text-lg text-foreground hover:text-accent">
                            Početna
                        </Link>
                     </li>
                     <li>
                        <Link href="/about" className="text-lg text-foreground hover:text-accent">
                            O nama
                        </Link>
                     </li>
                     <li>
                        <Link href="/blog" className="text-lg text-foreground hover:text-accent">
                            Blog
                        </Link>

                     </li>
                     <li>
                        <Link href="/gallery" className="text-lg text-foreground hover:text-accent">
                            Galerija
                        </Link>
                        
                     </li>
                     <li>
                        <Link href="/contact" className="text-lg text-foreground hover:text-accent">
                            Kontakt
                        </Link>    
                     </li>
                   </ul>
                </div>

                <div>
            <h4 className="font-semibold mb-4 text-foreground">
              PRATITE NAS
            </h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/maximus_fitness_gym/" className="hover:text-[#FFA52C] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100057251928377&locale=sr_RS" className="hover:text-[#FFA52C] transition-colors"
                 target="blank">
                <Facebook size={24} />
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Fitness Centar Maximus. Sva prava zadržana.
          </p>
        </div>
             </div>
           
        </footer>
    )
}