import Link from "next/link";
import { Button } from "./ui/button";

export function CTA() {
  
  return (
    <section className="py-20 bg-gradient-to-br from-[#be7b22] to-[#dba258] text-white">
      <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl md:text-4xl tracking-wide font-medium mb-4">
             DA LI STE SPREMNI DA TRANSFORMIŠETE SVOJE TJELO 
          </h2>
          <h3 className="text-xl md:text-3xl tracking-wide">
             Napravite prvi korak ka jačoj i zdravijoj verziji sebe
          </h3>
          <Link
            href="/contact">
            <Button
              size="lg"
              className="bg-white px-10 py-6 my-10 hover:bg-gray-200 shadow-accent hover:shadow-2xl text-accent tracking-wider text-md cursor-pointer">
                KONTAKTIRAJTE NAS DANAS
            </Button>
          </Link>
      </div>
    </section>
  )
}