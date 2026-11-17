'use client';

import { Button } from '@/components/ui/button';
import { dataProps } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoDialog from './video-dialog';

interface VideoAdProps {
   data: dataProps[];
   showHeading?: boolean;
}

export default function VideoAd({ data, showHeading }: VideoAdProps) {
   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

   if (!data.length) {
      return (
         <div className="mb-2">
            <h2 className="text-xl font-semibold">No Video Ad</h2>
         </div>
      );
   }

   return (
      <div id="videoProduction" className="mb-4">
         <Swiper
            loop={data.length > 1} // Only enable loop if more than one slide
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 mb-4"
         >
            {data.map((item, index) => (
               <SwiperSlide key={index}>
                  {item.image && (
                     <div className="relative max-md:h-[250px] md:h-[650px]">
                        <Image
                           priority
                           src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item.image?.url}
                           className="w-full h-full  object-cover rounded-md"
                           alt="Slider Image"
                           width={2000}
                           height={1200}
                        />
                        <div className="absolute bottom-0 inset-x-0 px-8 py-8 space-y-2 max-md:max-w-52 md:max-w-72">
                           <h2 className="h2 text-white capitalize text-2xl !font-bold mb-2">{item?.title}</h2>

                           {item?.link && (
                              <VideoDialog videoUrl={item?.link}>
                                 <Button className="!rounded-sm">
                                    <FaPlay /> Play
                                 </Button>
                              </VideoDialog>
                           )}
                        </div>
                     </div>
                  )}
               </SwiperSlide>
            ))}
         </Swiper>

         {showHeading && <h2 className="text-2xl text-white font-medium mb-4">Video Ads</h2>}

         <Swiper
            onSwiper={setThumbsSwiper}
            loop={data.length > 4}
            spaceBetween={10}
            slidesPerView={Math.min(4, data.length)}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper-thumbnail mt-4"
         >
            {data.map((item, index) => (
               <SwiperSlide className="basis-1/2 md:basis-1/4 3xl:basis-1/5 rounded-md" key={index}>
                  {item.image && (
                     <div className="relative h-[250px] md:h-[450px]">
                        <Image
                           priority
                           src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item.image?.url}
                           className="w-full h-full object-cover rounded-md cursor-pointer"
                           alt="Slider Image"
                           width={1000}
                           height={300}
                        />

                        <div className="hidden md:inline absolute bottom-0 inset-x-0 px-6 p-4 space-y-2">
                           {item?.link && (
                              <VideoDialog videoUrl={item?.link}>
                                 <Button className="!rounded-sm" onClick={() => item.id}>
                                    <FaPlay /> Play
                                 </Button>
                              </VideoDialog>
                           )}

                           <h2 className="capitalize text-lg text-white font-normal">{item?.title}</h2>
                        </div>
                     </div>
                  )}
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
