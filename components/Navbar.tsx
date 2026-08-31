
import Link from "next/link";
import Image from "next/image";

import NavLinks from "./nav-links";
import MobileMenu from "./mobile-menu";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const navigation = [
    { name: "POČETNA", href: "/" },
    { name: "O NAMA", href: "/about" },
    { name: "BLOG", href: "/blog" },
    { name: "GALERIJA", href: "/gallery" },
    { name: "KONTAKT", href: "/contact" },
  ];

  return (
    <header className="backdrop-blur-md bg-background/50 fixed shadow-sm w-full z-50">
      <div className="px-2 md:px-4 md:container mx-auto lg:max-w-6xl xl:px-0">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="mt-8 md:-mx-4 z-50">
            <Image             
              src="/logo-2.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>

          {/* DESKTOP LINKS */}
          <NavLinks navigation={navigation} />

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MobileMenu navigation={navigation} />
          </div>

        </div>
      </div>
    </header>
  );
}