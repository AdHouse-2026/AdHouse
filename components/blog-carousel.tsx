import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { dataProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCarousel({ data }: { data: dataProps[] }) {
   return (
      <Carousel
         plugins={[
            Autoplay({
               delay: 6000,
            }),
         ]}
      >
         <CarouselContent>
            {data.map((item) => (
               <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative rounded-xl">
                     {item.image && (
                        <Image
                           src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item?.image?.url}
                           width={330}
                           height={350}
                           className="rounded-lg shadow-sm w-full h-full object-cover"
                           alt={item?.title}
                        />
                     )}
                     <div className="absolute inset-0 z-10 p-3 flex flex-col justify-end">
                        <Link href={`/blog/${item?.documentId ?? ''}`} className="hover:text-white/45 transition-all duration-300">
                           <h2 className="text-lg truncate">{item?.title}</h2>
                        </Link>
                     </div>
                  </div>
               </CarouselItem>
            ))}
         </CarouselContent>
      </Carousel>
   );
}
