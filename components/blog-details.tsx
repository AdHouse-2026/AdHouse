'use client';

import React from 'react';
import Image from 'next/image';
import { dataProps, ImageProps } from '@/types';
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious
} from '@/components/ui/carousel';

export default function BlogDetails({ data }: { data: dataProps }) {
   if (!data) return null;

   return (
      <div className="py-4">
         {/* Blog Image and Title */}
         <div className="flex flex-col md:flex-row gap-4">
            {data.image && (
               <Image
                  src={
                     process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data?.image?.url
                  }
                  className="object-cover max-w-[450px] w-full rounded-lg mb-4"
                  alt={data?.title}
                  width={500}
                  height={400}
               />
            )}
            <h2 className="text-3xl md:text-4xl text-primary font-semibold mb-4 self-end leading-3">
               {data?.title}
            </h2>
         </div>

         {/* Blog Content */}
         {data.content && (
            <div className="mt-6 text-white">
               {data.content.map((block, index: number) => {
                  switch (block.type) {
                     case 'paragraph':
                        return (
                           <p
                              key={index}
                              className="text-lg mb-4 leading-relaxed"
                           >
                              {block.children
                                 ?.map(child => child.text)
                                 .join(' ')}
                           </p>
                        );

                     case 'heading':
                        return (
                           <h3
                              key={index}
                              className="text-2xl font-bold mb-4 leading-snug"
                           >
                              {block.children
                                 ?.map(child => child.text)
                                 .join(' ')}
                           </h3>
                        );

                     case 'list':
                        return (
                           <ul
                              key={index}
                              className="list-disc list-inside mb-4 text-lg"
                           >
                              {block.children?.map(
                                 (listItem, childIndex: number) => {
                                    return listItem.type === 'list-item' ? (
                                       <li key={childIndex}>
                                          {listItem.children
                                             ?.map(child => child.text)
                                             .join(' ')}
                                       </li>
                                    ) : null;
                                 }
                              )}
                           </ul>
                        );

                     default:
                        return null; // Handle unsupported types gracefully
                  }
               })}
            </div>
         )}

         {Array.isArray(data?.images) && data.images.length > 0 && (
            <div className="py-4">
               <Carousel>
                  <CarouselContent>
                     {data.images.map((img: ImageProps) => (
                        <CarouselItem
                           className="basis-1/5"
                           key={img.documentId}
                        >
                           <Image
                              src={
                                 process.env.NEXT_PUBLIC_STRAPI_BASE_URL +
                                 img?.url
                              }
                              className="w-full object-cover rounded-md"
                              alt={data?.title}
                              width={400}
                              height={300}
                           />
                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
               </Carousel>
            </div>
         )}
      </div>
   );
}
