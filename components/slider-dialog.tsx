import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/components/ui/button';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import { ImageProps } from '@/types';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SliderDialogProps = {
   children: React.ReactNode;
   data?: ImageProps[];
   singleImage?: ImageProps;
};

export default function SliderDialog({ children, data, singleImage }: SliderDialogProps) {
   const [open, setOpen] = React.useState(false);

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className="w-full max-w-screen-md bg-transparent border-none shadow-none">
            <DialogHeader className="flex flex-row justify-between items-center">
               <DialogTitle>Image Gallery</DialogTitle>
               <Button size={'icon'} onClick={() => setOpen(false)}>
                  <X />
               </Button>
            </DialogHeader>
            <DialogDescription />
            <div>
               {data && data.length > 0 && (
                  <Swiper
                     effect={'coverflow'}
                     grabCursor={true}
                     centeredSlides={true}
                     slidesPerView={'auto'}
                     navigation={true}
                     coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                     }}
                     pagination={true}
                     modules={[EffectCoverflow, Pagination, Navigation]}
                     className="mySwiper"
                  >
                     {data.map((item, index) => (
                        <SwiperSlide key={index}>
                           <Image
                              priority
                              src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item.url}
                              className="w-full h-auto object-cover rounded-md"
                              alt="Slider Image"
                              width={1000}
                              height={350}
                           />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               )}

               {singleImage && (
                  <Image
                     priority
                     src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + singleImage.formats?.large?.url || singleImage.url}
                     className="w-full h-auto object-cover rounded-md"
                     alt="Slider Image"
                     width={1000}
                     height={300}
                  />
               )}
            </div>
         </DialogContent>
      </Dialog>
   );
}
