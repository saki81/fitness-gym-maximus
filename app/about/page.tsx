import { PageHeroBanner } from "@/components/shared/page-hero-banner";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "O nama",
  description: "Saznajte više o Fitness Centar Maximus, teretani u Tesliću smještenoj u Sportskoj dvorani Radolinka.",
}


export default function AboutPage () {


    return (
        <>
         <PageHeroBanner title= "O nama"/>    

         <section className="py-12 md:py-16 container mx-auto">
          <div className="mt-10 px-4 max-w-4xl mx-auto text-center md:tracking-wider font-medium">
            <p className="text-foreground">
              Fitnes centar Maximus započeo je sa radom u septembru 2011. godine s ciljem da svojim članovima pruži moderno, ugodno i motivirajuće okruženje za trening. Tokom godina izgradili smo zajednicu ljudi koji dijele istu želju – zdraviji, aktivniji i kvalitetniji način života.
            </p>
          </div>
          <div className="mt-10 pr-2 pl-2 max-w-4xl mx-auto text-center md:tracking-wider font-medium">
           <p className="text-foreground">
             Na više od 250 m² pažljivo organizovanog prostora nudimo uslove prilagođene kako početnicima, tako i iskusnim rekreativcima i sportistima. 
             Naša misija nije samo pružiti mjesto za vježbanje, 
             već stvoriti okruženje u kojem svaki član može ostvariti svoj puni potencijal, 
             unaprijediti fizičku spremnost i razviti zdrave životne navike.
           </p>
          </div>
          <div className="mt-10 pr-2 pl-2 max-w-4xl mx-auto text-center md:tracking-wider font-medium">
          <p className="text-foreground">
             Kroz kontinuirano unapređenje opreme, programa treninga i stručne podrške, nastojimo 
             svakom članu omogućiti siguran i efikasan put do željenih rezultata. Bilo da je vaš 
             cilj povećanje snage, gubitak tjelesne težine, poboljšanje kondicije ili održavanje 
             zdravog načina života, u Maximusu ćete pronaći podršku, motivaciju i atmosferu koja 
             vas podstiče da budete najbolja verzija sebe.  
           </p>
          </div>
          <div className="mt-10 pr-2 pl-2 max-w-4xl text-center text-foreground mx-auto md:tracking-wider font-medium">
           <p className="text-foreground">
            Posvećeni smo vašem zdravlju, napretku i postizanju najboljih rezultata uz stručnu podršku, kvalitetne programe i motivaciju koja traje.
           </p>
          </div>
         </section>
       </>
    )
}