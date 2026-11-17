'use client';

import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import client01 from '@/public/clients/CLIENT-BANNER-01.jpg';
import client02 from '@/public/clients/CLIENT-BANNER-02.jpg';
import client01Res1 from '@/public/clients/CLIENT-BANNER-res1.jpg';
import client01Res2 from '@/public/clients/CLIENT-BANNER-res2.jpg';

export default function Clients() {
   return (
      <section className="bg-white py-28">
         <div className="container">
            <div className="flex items-center">
               <h2 className="h2 mr-2">Clients</h2>
               <div className="h-[3px] bg-black flex-1" />
            </div>
         </div>
         <div className="container flex justify-center px-4 py-4">
            <Carousel
               opts={{ loop: true }}
               plugins={[
                  Autoplay({
                     delay: 6000,
                     stopOnInteraction: false,
                  }),
               ]}
               className="w-[90%]"
            >
               <CarouselContent>
                  <CarouselItem>
                     <Image className="hidden md:block" src={client01} alt="client" width={1400} height={400} />
                     <Image className="md:hidden" src={client01Res1} alt="client" width={1400} height={400} />
                  </CarouselItem>
                  <CarouselItem>
                     <Image className="hidden md:block" src={client02} alt="client" width={1400} height={400} />
                     <Image className="md:hidden" src={client01Res2} alt="client" width={1400} height={400} />
                  </CarouselItem>
               </CarouselContent>
            </Carousel>
         </div>
      </section>
   );
}
