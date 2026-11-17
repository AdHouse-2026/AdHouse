import api from '@/lib/globalApi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';

export default async function BlogPage() {
   // Specify the correct type for the response data
   const { data: blogs } = await api.getBlogs({ next: { revalidate: 1 } });

   return (
      <>
         <section className="bg-white pt-32 pb-5">
            <header className="md:min-h-[300px] flex flex-col items-center justify-center text-center mb-3">
               <div className="container">
                  <h1 className="text-3xl md:text-5xl">
                     <span className="font-medium">Explore the stories of </span>{' '}
                     <span className="font-bold block mt-1 md:text-6xl">Design</span>
                  </h1>
               </div>
            </header>
         </section>

         <section className="py-4 relative">
            <span className="bg-primary h-[10px] left-[30%] right-[30%] w-auto absolute -top-1.5 rounded-full"></span>
            <div className=" flex flex-col items-center pt-24 pb-10">
               <div className="w-full md:w-[66.66666667%] max-md:px-8 space-y-10">
                  {blogs.map((blog) => (
                     <div key={blog.id} className="flex flex-col md:flex-row gap-3 md:gap-16">
                        {blog.image && (
                           <div className="w-full md:w-[41.66666667%]">
                              <Image
                                 src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + blog?.image?.url}
                                 alt={blog.title}
                                 width={1000}
                                 height={400}
                                 className="rounded-3xl shadow-sm w-full object-cover h-full mb-6"
                              />
                           </div>
                        )}
                        <div className="flex-1 pt-2">
                           <Link href={`/blog/${blog.documentId}`}>
                              <h2 className="text-2xl md:text-[38px] font-semibold text-primary mb-7">{blog.title}</h2>
                           </Link>
                           {blog.content && (
                              <>
                                 {blog.content.slice(0, 1).map((textcontent, index) => {
                                    if (textcontent.type === 'paragraph') {
                                       const fullText = textcontent.children?.map((child) => child.text).join(' ');

                                       const previewText = fullText?.slice(0, 260);

                                       return (
                                          <div key={index} className="text-white leading-none">
                                             <p className="text-base mb-4 font-light text-justify leading-normal">
                                                {previewText}...
                                             </p>
                                             <Link
                                                href={`/blog/${blog.documentId}`}
                                                className="text-white font-normal text-sm hover:underline flex items-center gap-2"
                                             >
                                                <span className="text-base">Read more</span>{' '}
                                                <FaChevronCircleRight size={18} />
                                             </Link>
                                          </div>
                                       );
                                    }
                                 })}
                              </>
                           )}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="hidden md:block overflow-hidden py-2 mb-4">
               <ul className="marquee text-primary flex items-center gap-24 text-4xl leading-none">
                  <li>• Meet the Dreamers and Doers Shaping Tomorrow's Advertising</li>
                  <li>• Meet the Dreamers and Doers Shaping Tomorrow's Advertising</li>
                  <li>• Meet the Dreamers and Doers Shaping Tomorrow's Advertising</li>
               </ul>
            </div>

            <span className="bg-primary h-[10px] left-[30%] right-[30%] w-auto absolute -bottom-1.5 rounded-full"></span>
         </section>
      </>
   );
}
