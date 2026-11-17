'use client';

import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
   return (
      <section className="py-10 bg-white">
         <div className="container">
            <div className="flex items-center justify-center md:px-4">
               <div className="w-full md:w-1/2 text-center bg-gradient-to-r from-[#766cff] to-[#4437af] text-white p-8 rounded-lg my-4">
                  <h2 className="text-2xl mb-4">Let's create something creative together</h2>

                  <Button variant="ghost" className="rounded-3xl !bg-[#1d1d28] hover:text-white" asChild>
                     <Link href="/contact">
                        Get in touch <FaChevronRight />
                     </Link>
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}
