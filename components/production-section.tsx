import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import api from '@/lib/globalApi';
import VideoCarousel from './video-carousel';

export default async function ProductionSection() {
   const { data: videos } = await api.getVideoAds();

   return (
      <section className="bg-white pt-10 pb-20 md:pb-32">
         <div className="container py-10 md:py-24">
            <div className="flex flex-wrap gap-4 items-center justify-center">
               {/* w-[30%] */}
               <div className="w-full md:w-1/4">
                  <h2 className="h2">Production</h2>
                  <h3 className="h3">House</h3>
                  <Button className="rounded-3xl mb-4" asChild>
                     <Link href="/about-us">View Project</Link>
                  </Button>
               </div>
               <div className="flex-1 w-full md:w-3/5">
                  <div className="md:border-l-2 md:border-primary  md:pl-10 md:py-6">
                     <p className="parapgraph">
                        Welcome to the creative lab of Ad House, where every advertisement is an adventure, and every
                        brand story is brought to life with air. As a pioneering production house, we excel in crafting
                        ads that do more than catch the eye—they capture the imagination. Our team of visionary creators
                        uses a blend of innovative technology and artistic prowess to deliver bespoke advertising
                        solutions that speak directly to your audience.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div className="max-md:px-5">
            <VideoCarousel data={videos} />
         </div>
      </section>
   );
}
