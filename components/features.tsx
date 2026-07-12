import { features } from "@/app/constants"

export function Features () {

    return (
        <section className="py-16 md-py-20 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-4xl tracking-wide  font-medium mb-4 text-foreground">
                        ZAŠTO ODABRATI NAS
                    </h2>
                    <h3 className="text-base md:text-xl tracking-wide text-foreground"> 
                        MJESTO GDJE POČINJU PRAVI REZULTATI
                    </h3>   
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                     { features.map((feature, index) => {
                         const Icon = feature.icon;

                         return (
                            <div key={index} className="text-center tracking-wider rounded-lg p-6 shadow-lg ">
                               <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                                <Icon size={40} className ="text-accent"/>
                               </div>
                                <h3 className="text-xl font-bold text-foreground pb-3">{feature.title}</h3>
                                 
                                 <p className="">{feature.description}</p>
                            </div>
                         )
                     })}
                </div>
            </div>
        </section>
    )
}