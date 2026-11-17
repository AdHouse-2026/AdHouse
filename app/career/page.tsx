import { CareerDialog } from '@/components/career-dialog';

export default function CareerPage() {
   return (
      <>
         <section className="bg-white pt-20 pb-10">
            <div className="container pt-20">
               <div className="flex flex-wrap gap-4 items-center justify-center">
                  <div className="w-full md:w-[66.66666667%] flex flex-col items-center text-center mb-20">
                     <div className="border-b-2 border-primary pb-3 mb-5 md:w-[80%]">
                        <h2 className="h2">
                           Be our next <span className="font-semibold">creative genius</span>
                        </h2>
                     </div>

                     <p className="text-base font-light mb-2">
                        Are you brimming with creativity and eager to make your mark in the advertising world?
                     </p>
                     <p className="text-base font-light">
                        Then join our team and immerse yourself in a culture of creativity, collaboration and continuous
                        learning. Get ready to dive into diverse projects, work with dynamic teams across Calicut, Kochi
                        & Bangalore.
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <section className="py-3">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 text-white py-10">
               <div className="col-span-1">
                  <div className="mb-8 md:p-10">
                     <h2 className="text-2xl mb-1">Motion Graphics Designer</h2>
                     <p className="font-light mb-3">
                        Bring stories to life as our next Motion Graphic Designer; where creativity meets motion in
                        every project.
                     </p>
                     {/* <Button className="rounded-3xl mt-4">Apply Now</Button> */}
                     <CareerDialog />
                  </div>
               </div>
               <div className="col-span-1">
                  <div className="mb-8 md:p-10">
                     <h2 className="text-2xl mb-1">Creative Designer</h2>
                     <p className="font-light mb-3">
                        Unleash your imagination as our Creative Designer; where every design is an opportunity to
                        inspire.
                     </p>
                     <CareerDialog />
                  </div>
               </div>
               <div className="col-span-1">
                  <div className="mb-8 md:p-10">
                     <h2 className="text-2xl mb-1">SEO Specialist</h2>
                     <p className="font-light mb-3">
                        Elevate our online presence as our SEO Specialist; where your strategies turn searches into
                        success.
                     </p>
                     <CareerDialog />
                  </div>
               </div>
               <div className="col-span-1">
                  <div className="mb-8 md:p-10">
                     <h2 className="text-2xl mb-1">Marketing Executive</h2>
                     <p className="font-light mb-3">
                        Drive our brand forward as our Marketing Executive; where your vision shapes our market success.
                     </p>
                     <CareerDialog />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
