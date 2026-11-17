'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutSection() {
   return (
      <section className="bg-white h-auto">
         <div className="container py-10 md:pt-32 md:pb-24">
            <div className="flex flex-wrap gap-4 items-center justify-center">
               {/* w-[30%] */}
               <div className="w-full md:w-1/4">
                  <h2 className="h2">Who</h2>
                  <h3 className="h3"> We Are</h3>
                  <Button className="rounded-3xl" asChild>
                     <Link href="/about-us">Let's meet</Link>
                  </Button>
               </div>
               <div className="flex-1 w-full md:w-3/5">
                  <div className="md:border-l-2 md:border-primary  md:pl-10 md:py-6">
                     <p className="parapgraph">
                        Welcome to Ad House, where imagination meets impact. With 16 years of expertise in the field, we
                        have continually pushed the boundaries of creativity and innovation, our company has always been
                        more than just an advertising company and now it's one of the best advertising companies in
                        Kerala. It's a crucible where creativity is both the fuel and flame, sparking ideas that
                        illuminate and inspire. In the bustling heart of creativity, Ad House first opened its doors in
                        Calicut with a simple yet ambitious vision: to transform the landscape of advertising by
                        infusing every campaign with unparalleled creativity and innovation. Our expansion into Kochi
                        and Bangalore was not just a geographical milestone but a testament to our universality.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
