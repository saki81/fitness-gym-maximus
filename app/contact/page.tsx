import { PageHeroBanner } from "@/components/shared/page-hero-banner"
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Metadata } from "next";


const metadata: Metadata = {
  title: "Kontakt",
  description: "Pronađite Fitness Centar Maximus u Sportskoj dvorani Radolinka u Tesliću i pogledajte kontakt informacije i lokaciju."
}



export default function ContactPage() {

    
    return (
        <>
          <PageHeroBanner title="Kontakt" />
          <section className="py-16 md:py-20 px-6 md:px-4">
            <div className="max-w-6xl container mx-auto">
                   <h2 className="text-2xl md:text-3xl text-foreground tracking-wider mb-16">KONTAKT INFORMACIJE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                   <div className="space-y-6">
                      <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                        <a href="tel:+38765063678">
                         <div className="flex">
                         <Phone  className="text-accent"size={34}/>
                          <div className="text-wrap ml-3 pt-0">
                          <p className="text-foreground font-medium text-lg"> Telefon</p> 
                          <p className="text-foreground font-normal text-lg">+387 65 063 678</p>
                          </div>
                         </div>
                        </a>   
                      </div>

                      <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                        <a href="viber://chat?number=%2B38765063678">
                         <div className="flex">
                         <MessageCircle  className="text-accent"size={34}/>
                          <div className="text-wrap ml-3 pt-0">
                          <p className="text-foreground font-medium text-lg">Viber</p> 
                          <p className="text-foreground font-normal text-lg">+387 65 063 678</p>
                          </div>
                         </div>
                        </a>  
                      </div>

                      <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                        <a href="https://wa.me/38765063678"
                           target="_blank"
                           rel="noopener noreferrer">
                         <div className="flex">
                         <MessageCircle  className="text-accent"size={34}/>
                          <div className="text-wrap ml-3 pt-0">
                          <p className="text-foreground font-medium text-lg">WhatsApp</p> 
                          <p className="text-foreground font-normal text-lg">Poziv na WhatsApp</p>
                          </div>
                         </div>
                        </a>  
                      </div>

                      <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                        <a href="mailto:cike198110@hotmail.com?subject=Upit%20sa%20web%20stranice">
                         <div className="flex">
                         <Mail  className="text-accent"size={34}/>
                          <div className="text-wrap ml-3 pt-0">
                          <p className="text-foreground font-medium text-lg">Email</p> 
                          <p className="text-foreground font-normal text-lg">cike198110@hotmail.com</p>
                          </div>
                         </div>
                        </a>  
                      </div>

                      <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                         <div className="flex">
                         <Clock className="text-accent"size={34}/>
                          <div className="text-wrap ml-3 pt-0">
                          <p className="text-foreground font-medium text-lg">Radno Vrijeme</p> 
                          <p className="text-foreground font-normal text-lg">24/7</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                         <div className="flex">
                         <MapPin className="text-accent"size={34}/>
                          <div className="text-wrap ml-3 pt-0">
                          <p className="text-foreground font-medium text-lg">Adresa</p> 
                          <p className="text-foreground font-normal text-lg">Krajiškog korpusa bb, 74270 Teslić</p>
                          </div>
                         </div>
                      </div>
                   </div>
                       {/*Google Maps*/}
                     <div className="overflow-hidden rounded-xl shadow-lg ">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.6749127954895!2d17.8646547!3d44.603674100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m3!1m2!1s0x475e633f80a1a391%3A0x8b1864c6da906717!2sfitnes%20teretana%20Maximus!5e0!2m2!1sbs!2sba!4v1781684802717!2m2!1sbs!2sba" 
                              width="100%" 
                              height="100%"   
                              loading="lazy" 
                              className=""/>
                    </div>
                </div>
            </div>
          </section>
        </>
        
    )
}