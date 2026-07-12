"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href: string;
}

type Props = {
  navigation: NavItem[];
}

export default function MobileMenu({ navigation }: Props) {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const pathname = usePathname();

      const isActive = (path: string) => pathname === path

      return (
         <>
             <Button
               variant="ghost"
               size="lg"
               className="md:hidden p-2 cursor-pointer"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                   <X className="!w-6 !h-6" />
                ) : (
                   <Menu className="!w-6 !h-6" />
                )}
             </Button>
             
              {/*MOBILE NAVIGATION*/}
                   <nav
                    className={`fixed top-16 left-0 w-full tracking-wider z-40
                                bg-background/90 backdrop-blur-md overflow-hidden
                                transition-all duration-300 ease-in-out md:hidden
                   ${
                     isMenuOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0 pointer-events-none"
                        }`}
>
  <div className="flex flex-col space-y-3 pt-4 pb-4 text-center text-md">
    {navigation.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className={`transition-colors ${
          isActive(item.href)
            ? "font-bold text-primary"
            : "text-foreground hover:text-gold font-bold"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </Link>
    ))}
  </div>
</nav>
         </>
      )
}