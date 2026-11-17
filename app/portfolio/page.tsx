import Brandings from '@/components/brandings';
import Creatives from '@/components/creatives';
import Printables from '@/components/printables';
import ProductPackaging from '@/components/product-packaging';
import VideoAd from '@/components/video-ad';
import api from '@/lib/globalApi';

export const dynamic = 'force-dynamic';

export default async function PortfolioPage() {
   const { data: brandings } = await api.getBrandings({ next: { revalidate: 1 } });
   const { data: creatives } = await api.getCreatives({ next: { revalidate: 1 } });
   const { data: printables } = await api.getPrintables({ next: { revalidate: 1 } });
   const { data: productPackagings } = await api.getProductPackagings({ next: { revalidate: 1 } });
   const { data: videos } = await api.getVideoAds({ next: { revalidate: 1 } });

   return (
      <section>
         <div className="px-4">
            <VideoAd data={videos} showHeading />
            <Brandings data={brandings} showHeading />
            <Creatives data={creatives} showHeading />
            <Printables data={printables} showHeading />
            <ProductPackaging data={productPackagings} showHeading />
         </div>

         <div className="container py-24">
            <div className="flex flex-wrap gap-4 items-center justify-center text-white">
               <div className="w-full md:w-1/4">
                  <h2 className="h2">Our</h2>
                  <h3 className="h3"> Portfolio</h3>
               </div>
               <div className="w-full md:w-3/5">
                  <div className="md:border-l-2 md:border-white md:pl-10 md:py-6">
                     <p className="parapgraph">
                        Welcome to AD HOUSE, where your brand's potential is our passion. Established in 15 Years, we've
                        grown from a visionary duo to a full-spectrum creative force, dedicated to transforming the
                        advertising landscape. At our core, we believe in the power of ideas, innovation, and impact.
                        Our team of creative strategists, visionary designers, and data-driven marketers work in harmony
                        to deliver campaigns that not only capture attention but also create real-world results.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
