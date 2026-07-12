"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href: string;
};

type Props = {
  navigation: NavItem[];
};

export default function NavLinks({ navigation }: Props) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="hidden md:flex items-center space-x-8 tracking-wide text-md">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`transition-colors ${
            isActive(item.href)
              ? "font-bold text-primary"
              : "text-foreground hover:text-gold font-bold"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}