'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import imageOne from '@/public/banner/adhouse_banner_01.webp';
import imageTwo from '@/public/banner/adhouse_banner_02.webp';
import imageThree from '@/public/banner/adhouse_banner_03.webp';
import hoverOne from '@/public/banner/adhouse_banner_01A.webp';
import hoverTwo from '@/public/banner/adhouse_banner_02A.webp';
import hoverThree from '@/public/banner/adhouse_banner_03A.webp';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const images = [imageOne, imageTwo, imageThree];
const hoverImages = [hoverOne, hoverTwo, hoverThree];

export default function Banner() {
   return (
      <>
         {/* Desktop Grid */}
         <div className="hidden md:grid grid-cols-3 mb-4 md:h-dvh">
            {images.map((img, index) => (
               <div key={index} className="col-span-1 relative group">
                  <Image
                     src={img}
                     priority
                     alt="adhouse banner"
                     className="w-full h-full transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                     width={1000}
                     height={250}
                  />
                  <Image
                     src={hoverImages[index]}
                     priority
                     alt="adhouse banner hover"
                     className="w-full h-full transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                     width={1000}
                     height={250}
                  />
               </div>
            ))}
         </div>

         {/* Mobile Carousel */}
         <div className="md:hidden">
            <Carousel
               className="w-full"
               plugins={[
                  Autoplay({
                     delay: 3000,
                  }),
               ]}
            >
               <CarouselContent>
                  {images.map((img, index) => (
                     <CarouselItem key={index}>
                        <Image
                           src={img}
                           priority
                           alt="adhouse banner"
                           className="w-full h-auto transition-opacity duration-500 ease-in-out"
                           width={600}
                           height={250}
                        />
                     </CarouselItem>
                  ))}
               </CarouselContent>
            </Carousel>
         </div>
      </>
   );
}
