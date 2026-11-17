import Counter from '@/components/counter';
import { TeamCard } from '@/components/team-card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import api from '@/lib/globalApi';
import { TeamMember } from '@/types';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AboutUsPage() {
   const { data } = await api.getTeams({ next: { revalidate: 1 } });

   const groupedByLevel = data.reduce((acc, item) => {
      if (!item.level) return acc; // Skip items without a level

      const levelName = item.level.name; // Since we already checked, `level` exists
      if (!acc[levelName]) {
         acc[levelName] = [];
      }
      acc[levelName].push(item);

      return acc;
   }, {} as Record<string, TeamMember[]>);

   return (
      <>
         <section className="bg-white">
            <div className="container pt-40">
               <div className="flex flex-wrap gap-4 items-center justify-center">
                  <div className="w-full md:w-[66.66666667%] flex flex-col items-center text-center mb-20">
                     <div className="border-b-2 border-primary pb-3 mb-5 md:w-[70%]">
                        <h2 className="h2">
                           Who <span className="font-semibold">We Are</span>
                        </h2>
                     </div>

                     <p className="text-base font-light">
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

            <div className="hidden md:block overflow-hidden bg-gradient-to-r from-[#766cff] to-[#4437af] py-2 -rotate-2">
               <ul className="marquee text-white flex items-center gap-24 text-xl leading-none">
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
               </ul>
            </div>

            <div className="container">
               <div className="flex items-center justify-center md:mt-24 md:mb-16 divide-x divide-solid divide-slate-300">
                  <div className="md:w-[33.33333333%] px-2 text-center">
                     <Counter id="counter1" start={30} end={122} text="K+" duration={3000} />
                     <p className="text-xs md:text-base font-bold">SUCCESSFUL PROJECTS</p>
                  </div>
                  <div className="md:w-[33.33333333%] px-2 text-center">
                     <Counter id="counter1" start={0} end={16} duration={2000} />
                     <p className="text-xs md:text-base font-bold">YEARS OF JOURNEY</p>
                  </div>
                  <div className="md:w-[33.33333333%] px-2 text-center">
                     <Counter id="counter1" start={0} end={1} text="K+" duration={3000} />
                     <p className="text-xs md:text-base font-bold">HAPPY CLIENTS</p>
                  </div>
               </div>
            </div>

            <div className="container mx-auto py-20">
               <div className="bg-[#1d1d28] text-white relative px-10 py-10 md:pl-56 md:pr-20 md:pb-20 md:pt-20 overflow-hidden  rounded-3xl">
                  <h2 className="hidden md:block absolute -left-52 top-20 -rotate-90 leading-none font-light text-[60px] text-[#4b4b56]">
                     Our Story Our Story
                  </h2>
                  <div className="flex flex-row items-center gap-x-2 md:gap-x-6 mb-4">
                     <h3 className="text-5xl md:text-[90px] font-bold text-primary">16</h3>
                     <p className="text-xl md:text-3xl">
                        Years of Creativity, Innovation, and Impact! <br />
                        <b>In Advertising</b>
                     </p>
                  </div>

                  <p className="text-justify">
                     Since our humble beginnings in 2009 as a Releasing Agency, Ad House has evolved into a dynamic
                     force in the world of Digital Marketing and Advertising. As we celebrate 16 years of innovation and
                     growth, we reflect on our journey from a small start-up to a multi-branch powerhouse. With a
                     relentless commitment to creativity, excellence, and client satisfaction, we have expanded to three
                     branches, serving clients with cutting-edge solutions that drive results. Here's to 16 years of
                     success, and many more milestones to come!
                  </p>
               </div>
            </div>

            <div className="container pt-10 md:pt-40">
               <div className="flex flex-wrap gap-4 items-center justify-center">
                  <div className="w-full md:w-[66.66666667%] flex flex-col items-center text-center mb-20">
                     <div className="border-b-2 border-primary pb-3 mb-5 md:w-[70%]">
                        <h2 className="h2">People behind the pixels</h2>
                     </div>

                     <p className="text-base font-light">
                        Our team is a vibrant tapestry of thinkers, dreamers, and doers, each bringing their unique
                        spark to the forge. Together, we have created magic, blending strategy with artistry to tell
                        stories that resonate and engage.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-20">
            <div className="container mx-auto">
               <div className="hidden md:block">
                  {Object.entries(groupedByLevel)
                     .sort(([a], [b]) => {
                        const levelA = parseInt(a.replace(/\D/g, ''));
                        const levelB = parseInt(b.replace(/\D/g, ''));
                        return levelA - levelB;
                     })
                     .map(([levelName, members]) => {
                        const sortedMembers = [...members].sort((a, b) => {
                           if (a.position === null) return 1;
                           if (b.position === null) return -1;
                           return a.position - b.position;
                        });

                        return (
                           <section
                              key={levelName}
                              className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mb-4"
                           >
                              {sortedMembers.map((member) => (
                                 <TeamCard key={member.id} member={member} />
                              ))}
                           </section>
                        );
                     })}
               </div>

               <div className="md:hidden">
                  {Object.entries(groupedByLevel)
                     .sort(([a], [b]) => {
                        const levelA = parseInt(a.replace(/\D/g, ''));
                        const levelB = parseInt(b.replace(/\D/g, ''));
                        return levelA - levelB;
                     })
                     .map(([levelName, members]) => {
                        const sortedMembers = [...members].sort((a, b) => {
                           if (a.position === null) return 1;
                           if (b.position === null) return -1;
                           return a.position - b.position;
                        });

                        return (
                           <Carousel className="w-full" key={levelName}>
                              <CarouselContent>
                                 {sortedMembers.map((member) => (
                                    <CarouselItem className="w-full" key={member.id}>
                                       <TeamCard member={member} />
                                    </CarouselItem>
                                 ))}
                              </CarouselContent>
                           </Carousel>
                        );
                     })}
               </div>
            </div>
         </section>

         <section className="bg-white overflow-hidden relative pt-32 pb-20 hidden lg:block min-h-[500px]">
            <div className="hidden md:block overflow-hidden bg-primary absolute py-2 rotate-[10deg] -top-[4rem] -right-[40rem]">
               <ul className="marquee uppercase text-white flex items-center gap-24 text-xl leading-none overflow-hidden">
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
               </ul>
            </div>

            <div className="container pt-20">
               <div className="flex flex-wrap gap-4 items-center justify-center">
                  <div className="w-[66.66666667%] flex flex-col items-center text-center mb-28">
                     <div className="w-[70%]">
                        <h2 className="h2 mb-4">
                           Join Our <span className="font-semibold">Team</span>
                        </h2>
                     </div>

                     <p className="text-base font-light mb-1">
                        Are you brimming with creativity and eager to make your mark in the advertising world?
                     </p>

                     <p className="text-base font-light">
                        Then join our team and immerse yourself in a culture of creativity, collaboration and continous
                        learning. Get ready to dive into diverse projects, work with dynamic teams across Calicut, Kochi
                        & Bangalore
                     </p>

                     <Button className="rounded-full mt-6">
                        <Link href="/career">Apply Now</Link>
                     </Button>
                  </div>
               </div>
            </div>

            <div className="hidden md:block overflow-hidden bg-primary absolute py-2 rotate-[10deg] bottom-56 -right-[40rem]">
               <ul className="marquee uppercase text-white flex items-center gap-24 text-xl leading-none">
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
                  <li>• Stand Out in a Sea of Competition with Our creative advertisements</li>
               </ul>
            </div>
         </section>
      </>
   );
}
