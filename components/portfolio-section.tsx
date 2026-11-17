import React from 'react';
import Link from 'next/link';
import Brandings from '@/components/brandings';
import Creatives from '@/components/creatives';
import { Button } from '@/components/ui/button';
import api from '@/lib/globalApi';

export default async function PortfolioSection() {
   const { data: brandings } = await api.getBrandings();
   const { data: creatives } = await api.getCreatives();

   return (
      <section>
         <div className="flex flex-wrap justify-center mb-8 text-white">
            <div className="md:w-[91.66666667%] px-3 flex items-center">
               <h2 className="h2 mr-3">Portfolio</h2>
               <div className="border-b border-gray-200 flex-1" />
               <Button className="rounded-3xl" asChild>
                  <Link href="/portfolio">See more works</Link>
               </Button>
            </div>
         </div>
         <Brandings data={brandings} />
         <Creatives data={creatives} />
      </section>
   );
}
