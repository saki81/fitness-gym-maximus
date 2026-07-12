import Link from "next/link";
import { Button } from "./ui/button";

interface CategoryFilterProps {
    currentCategory?: string
};

const categories = [
    { slug: "", name: "Sve" },
    { slug: "ishrana", name: "Ishrana" },
    { slug: "suplementacija", name: "Suplementacija" },
    { slug: "trening", name: "Trening"}
];

export function CategoryFilter ({currentCategory}: CategoryFilterProps) {
    return (
        <div className="flex items-center justify-center gap-1 mb-6 w-full p-1">
           {categories.map((category) => (
             <Button
               key={category.slug}
               size="sm"
               className="bg-accent"
               variant={
                currentCategory === category.slug || (!currentCategory && category.slug === "") ?
                  "secondary" : "default"
               }
               asChild
               >
               <Link
                  href={category.slug ? 
                  `/blog?category=${category.slug}` : "/blog"}>{category.name }
               </Link>
             </Button>
           ))}
        </div>
    )
}