/*"use client"*/

import { PageHeroBanner } from "@/components/shared/page-hero-banner"
import { galleryImages } from "../constants";
import Image from "next/image";
import { getImageUrl } from "@/lib/imagekit";
//import { useState } from "react";


interface GalleryImage {
  id: string
  url: string
  title: string
}

interface GalleryCardProps {
  images: GalleryImage
}

export default function GalleryPage ({ images }: GalleryCardProps) {
  //  const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
       <>
         <PageHeroBanner title="Galerija"/>

         <section className="max-w-6xl container mx-auto px-6 md:px-4 xl:px-0 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {galleryImages.map((image) => (
            <div
              key={image.id}
           
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Image
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 width={330}
                 height={305}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
         </section>
       </>
    )
}