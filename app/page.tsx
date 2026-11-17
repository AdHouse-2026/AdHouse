import AboutSection from '@/components/about-section';
import Banner from '@/components/banner';
import PortfolioSection from '@/components/portfolio-section';
import Marquee from '@/components/marquee';
import WeDo from '@/components/we-do';
import Clients from '@/components/clients';
import ProductionSection from '@/components/production-section';
import Testimonials from '@/components/testimonials';
import BlogSection from '@/components/blog-section';
import api from '@/lib/globalApi';
import ContactSection from '@/components/contact-section';

export const dynamic = 'force-dynamic';

export default async function Home() {
   const { data } = await api.getBlogs({ next: { revalidate: 1 } });
   const blogs = data.filter((blog) => blog.featured);
   const { data: testimonials } = await api.getTestimonials({ next: { revalidate: 1 } });

   return (
      <>
         {/* <Preloader /> */}
         <Banner />
         <AboutSection />
         <Marquee />
         <WeDo />
         <PortfolioSection />
         <ProductionSection />
         <Testimonials data={testimonials} />
         <Clients />
         <BlogSection data={blogs} />
         <ContactSection />
      </>
   );
}
