import ContactSection from '@/components/contact-section';
import ServcieAccordion from '@/components/service-accordion';
import Image from 'next/image';

export default function ServicesPage() {
   return (
      <>
         <section className="bg-white">
            <div className="container pt-40">
               <div className="flex flex-wrap gap-4 items-center justify-center">
                  <div className="w-full md:w-[66.66666667%] flex flex-col items-center text-center mb-20">
                     <div className="border-b-2 border-primary pb-3 mb-5 md:w-[70%]">
                        <h2 className="h2">
                           What <span className="font-semibold">We Do</span>
                        </h2>
                     </div>

                     <p className="text-base font-light">
                        At Ad House, we craft compelling narratives and captivating visuals that elevate brands. From
                        digital campaigns and social media strategies to print, outdoor, and broadcast ads, our creative
                        prowess knows no bounds. We turn ideas into impactful stories, ensuring your message resonates
                        with your audience. Whether you need a striking billboard, an engaging social media campaign, or
                        a full-scale multimedia strategy, we're here to bring your vision to life. Let's create
                        something extraordinary together.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-20">
            <div className="container grid grid-cols-1 md:grid-cols-12 gap-4 ">
               <div className="col-span-1 md:col-span-5 flex flex-col justify-center md:items-end md:px-20">
                  <Image src={'/service.jpg'} width={600} height={400} alt="service" />
               </div>
               <div className="col-span-1 md:col-span-7 md:col-start-6 md:border-l text-white md:border-gray-500 md:pl-20">
                  <ServcieAccordion />
               </div>
            </div>
         </section>

         <section className="bg-white">
            <div className="container mx-auto pt-10">
               <ContactSection />
            </div>
         </section>
      </>
   );
}
