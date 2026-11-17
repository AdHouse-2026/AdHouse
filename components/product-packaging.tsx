'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { dataProps } from '@/types';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import SliderDialog from './slider-dialog';

interface BrandingsProps {
   data: dataProps[];
   showHeading?: boolean;
}

export default function ProductPackaging({ data, showHeading }: BrandingsProps) {
   if (!data.length) {
      return (
         <div className="mb-2">
            <h2 className="text-xl font-semibold text-gray-400">No Product Packaging</h2>
         </div>
      );
   }

   return (
      <div className="mb-4" id="productPackaging">
         {showHeading && <h2 className="text-2xl text-white font-medium mb-4">Product Packaging</h2>}
         <Carousel
            opts={{}}
            plugins={[
               Autoplay({
                  delay: 2000,
               }),
            ]}
         >
            <CarouselContent>
               {data.map((item) => (
                  <CarouselItem key={item.documentId} className="basis-1/2 md:basis-1/4 2xl:basis-1/5">
                     {item.image && (
                        <SliderDialog singleImage={item.image}>
                           <Image
                              src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${item?.image.url}`}
                              alt={item.title}
                              className="w-full h-auto object-cover rounded-md"
                              width={1000}
                              height={300}
                           />
                        </SliderDialog>
                     )}
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>
      </div>
   );
}
