import { pricingPlans } from "@/app/constants"
import { Check } from "lucide-react"


export function MembershipPricing() {
    

    return (
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
             <div className="text-center mb-16">
                <h2 className="text-2xl md:text-4xl tracking-wide  font-medium mb-4 text-foreground">
                    ČLANARINE
                </h2>
                <h3 className="text-base md:text-xl tracking-wide text-foreground">
                    ODABERITE PAKET KOJI VAM NAJBOLJE ODGOVARA
                </h3>
             </div>

             {/* Pricing cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {pricingPlans.map((plan, index) => (
                    <div
                      key={index} 
                      className={`relative rounded-2xl shadow-xl transition-all hover:shadow-2xl hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-br from-[#be7b22] to-[#dba258] text-white'
                  : 'bg-card border-2 border-border'
              }`}
            >
             {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#2b2b2b] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Najpopularnije
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.popular ? 'text-white/90' : 'text-muted-foreground'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span
                      className={`text-5xl font-bold ${
                        plan.popular ? 'text-white' : 'text-foreground'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-2xl ml-2 ${
                        plan.popular ? 'text-white/90' : 'text-muted-foreground'
                      }`}
                    >
                      KM
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      plan.popular ? 'text-white/80' : 'text-muted-foreground'
                    }`}
                  >
                    po {plan.period}u
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check
                        size={20}
                        className={`mr-3 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-white' : 'text-[#FFA52C]'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? 'text-white' : 'text-foreground'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                 ))}
                </ul>              
             </div>
            </div> 
             ))}
          </div> 
        </div>    
      </section>
    )
}