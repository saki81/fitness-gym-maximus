import { categories } from "@/app/constants"
import Image from "next/image";
import Link from "next/link";


export function Category () {

    return (
        <section className="py-12 md:py-20 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl tracking-wide  font-medium mb-4 text-foreground">
                        ISTRAŽITE KATEGORIJE
                    </h2>
                     <h3 className=" text-base md:text-xl tracking-wide text-foreground"> 
                        TRENING PRILAGOĐEN VAŠIM CILJEVIMA 
                    </h3>   
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                     {categories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                             <Link key={index} href={`/blog?category=${category.slug}`}>
                              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105">
                           
                                <Image
                                   src={category.image}
                                   alt={category.title}
                                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                   width={350}
                                   height={305}
                                   />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                   <Icon size={36} className="mb-3 text-accent"/>
                                   <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                                   <p className="text-sm text-gray-300">{category.description}</p>
                                </div>
                             </div>
                             
                            </Link>
                        )
                     })}
                </div>
            </div>
        </section>
    )
}