'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ServcieAccordion from './service-accordion';

export default function WeDo() {
   return (
      <div className="container py-14 text-white">
         <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-[41.66666667%] px-3">
               <div className="md:text-right pr-[15%]">
                  <h2 className="h2">What</h2>
                  <h3 className="h3">We Do</h3>
                  <Button className="rounded-3xl" asChild>
                     <Link href="/services">Services</Link>
                  </Button>
               </div>
            </div>

            <div className="w-full md:w-[58.33333333%] px-3">
               <div className="py-[15px] md:pr-[10%] md:pl-[15%] md:border-l md:border-white">
                  <ServcieAccordion />
               </div>
            </div>
         </div>
      </div>
   );
}
