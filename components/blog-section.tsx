'use client';

import { Button } from '@/components/ui/button';
import { dataProps } from '@/types';
import Link from 'next/link';
import BlogCarousel from './blog-carousel';

export default function BlogSection({ data }: { data: dataProps[] }) {
   return (
      <section className="py-10 md:py-20 text-white">
         <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-[33.33333333%] px-4">
               <div className="pl-12">
                  <h2 className="h2">
                     Explore the <br />
                     stories of
                  </h2>
                  <h3 className="h3">Advertising</h3>
                  <Button className="rounded-3xl my-3" asChild>
                     <Link href="/blog">View More Blog</Link>
                  </Button>
               </div>
            </div>
            <div className="w-full md:w-[66.66666667%] px-4">
               <BlogCarousel data={data} />
            </div>
         </div>
      </section>
   );
}
