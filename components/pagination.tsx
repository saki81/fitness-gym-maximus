"use client"

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface PaginationProps {
    currentPage: number;
    totalPage: number;
    category?: string;
}

export function Pagination({currentPage, totalPage, category}: PaginationProps) {
   
    if (totalPage <= 1) return null;

    const baseHref = (page: number) => {
        const params = new URLSearchParams();

        if (category) params.set("category", category);
        if (page > 1) params.set("page", String(page))
            return `/blog?${params.toString()}`
    }

    return (
        <div className="flex items-center justify-center mt-10 space-x-2">
           {/* prev button */}
           {currentPage === 1 
           ? <Button 
                variant= "disabled"
                size="sm">Prev
             </Button> 
           :  <Button 
              asChild 
              variant="secondary" 
              size="sm" 
              disabled={currentPage===1}>
              <Link href={baseHref(currentPage - 1)}>Prev</Link>
           </Button>
           }
           {/* numbers pages */}
           {Array.from({length: totalPage}, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                className="bg-accent"
                asChild
                size="sm"
                variant={page === currentPage ? "default" : "secondary"}>
                <Link href={baseHref(page)}>{page}</Link>
              </Button>
           ))}

           {/* next button */}
            { currentPage === totalPage 
            ? <Button 
                variant= "disabled"
                size="sm">Next
              </Button> 
            : <Button
                asChild
                variant="secondary"
                size="sm">
                <Link href={baseHref(currentPage + 1)}>Next</Link>
              </Button>
            }
        </div>
    )
}