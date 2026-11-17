'use client';

import React, { useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { accordionData } from '@/data/data';

export default function ServcieAccordion() {
   useEffect(() => {
      AOS.init({ once: true });
      AOS.refresh();
   }, []);

   return (
      <Accordion type="single" collapsible className="w-full">
         {/* Accordion Items */}
         {accordionData.map((item, index) => (
            <AccordionItem
               key={item.value}
               value={item.value}
               className="border-none"
               data-aos="fade-up"
               data-aos-delay={100 * (index + 1)}
               data-aos-duration="800"
            >
               <AccordionTrigger className="data-[state=open]:text-primary flex items-center gap-x-3 [&>svg]:hidden hover:no-underline">
                  <h2 className="text-xl md:text-3xl font-medium">{item.title}</h2>
                  <div className="border-b border-gray-200 flex-1" />
               </AccordionTrigger>
               <AccordionContent className="text-white text-base">
                  <p>{item.description}</p>
                  <ul className="list-disc ml-4 mt-3">
                     {item.list.map((listItem, listIndex) => (
                        <li key={listIndex}>{listItem}</li>
                     ))}
                  </ul>
               </AccordionContent>
            </AccordionItem>
         ))}
      </Accordion>
   );
}
