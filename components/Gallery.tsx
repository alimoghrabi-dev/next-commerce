"use client";

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: any;
}

const Gallery = ({ images }: GalleryProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleClick = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5 pb-7">
      <div className="order-last lg:order-none flex gap-8 lg:flex-col">
        {images.map((image: any, index: number) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-gray-100 hover:scale-[1.01] transition duration-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="image"
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden roounded-lg lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="image"
          width={950}
          height={950}
          className="w-3/4 h-full object-cover ml-0 md:ml-6"
        />

        <span className="absolute top-0 left-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
};

export default Gallery;
