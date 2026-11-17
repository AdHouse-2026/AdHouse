"use client";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
   const pathname = usePathname();

   return (
      <footer
         className={cn(
            " md:pt-6",
            pathname === "/portfolio" ||
               pathname === "/blog" ||
               pathname === "/career" ||
               pathname === "/contact" ||
               pathname.includes("/blog/")
               ? "bg-white text-black"
               : "bg-[#1d1d28] text-white",
         )}
      >
         <a
            href="https://wa.me/919747550515" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-5 z-50"
         >
            <Image src="/whatsapp_btn.svg" alt="WhatsApp" width={60} height={60} />
         </a>
         <div className="container py-4">
            <div className="flex items-center gap-4 mt-4 mb-6">
               <Logo />
               <div
                  className={cn(
                     "border-t  flex-1",
                     pathname === "/portfolio" ||
                        pathname === "/blog" ||
                        pathname === "/career" ||
                        pathname === "/contact"
                        ? "border-[#1d1d28]"
                        : "border-white",
                  )}
               ></div>
            </div>

            <div
               className={cn(
                  "flex flex-wrap gap-x-3 max-md:divide-y",
                  pathname === "/portfolio" || pathname === "/blog" || pathname === "/career" || pathname === "/contact"
                     ? "max-md:divide-gry-200"
                     : "max-md:divide-white/20",
               )}
            >
               <div className="w-full md:w-[calc(25%-3rem)] max-md:py-3">
                  <p className="font-light text-[13px] mb-5">
                     Welcome to the advertising company, where every campaign is a labour of love, every strategy a
                     masterpiece and every client a partner in our creative odyssey.
                  </p>
                  <p className="font-light text-[13px] mb-5">info@adhouseadvertising.in</p>
               </div>

               <div className="w-full md:w-[calc(25%-3rem)] max-md:py-3">
                  <h6 className="font-normal text-lg">Calicut (Corporate Office)</h6>
                  <address className="text-[13px] not-italic mb-5">
                     5th Floor, Moideen Tower, Bank Rd, <br /> near Fathima Hospital,
                     <br /> Kozhikode, Kerala 673001
                  </address>

                  <div className="block">
                     <a className="text-[13px]" href="tel:+919747550515">
                        +91 9747 550 515
                     </a>
                  </div>

                  <div className="block">
                     <a className="text-[13px]" href="tel:+919747024235">
                        +91 9747 024 235
                     </a>
                  </div>
               </div>

               <div className="w-full md:w-[calc(25%-3rem)] max-md:py-3">
                  <h6 className="font-normal text-lg">Kochi</h6>
                  <address className="text-[13px] not-italic mb-5">
                     2nd Floor, Kasim Building, <br /> Sebastian Road, Kaloor, <br /> Ernakulam, Kerala - 682017
                  </address>

                  <div className="block">
                     <a className="text-[13px]" href="tel:+917994550515">
                        +91 799 455 0515
                     </a>
                  </div>

                  <div className="block">
                     <a className="text-[13px]" href="tel:+919747550515">
                        +91 9747 550 515
                     </a>
                  </div>
               </div>

               <div className="w-full md:w-[calc(25%-3rem)] max-md:py-3">
                  <h6 className="font-normal text-lg">Bangalore</h6>
                  <address className="text-[13px] not-italic mb-5">
                     No.1, Shop No.F1A, SMV Plaza, <br />
                     Opp: Royal Shelters Layout, <br />
                     Devarachikkana Halli, <br />
                     BG Road, Bangalore - 560076
                  </address>

                  <div className="block">
                     <a className="text-[13px]" href="tel:+919746810515">
                        +91 9746 810 515
                     </a>
                  </div>

                  <div className="block">
                     <a className="text-[13px]" href="tel:+919747550515">
                        +91 9747 550 515
                     </a>
                  </div>
               </div>
            </div>

            <div className="flex flex-wrap items-center mt-4 space-y-2">
               <div className="w-full md:w-1/4">
                  <p>Powered By Ad House.</p>
               </div>

               <div className="w-full md:w-1/2">
                  <ul className="flex flex-wrap items-center justify-center  gap-x-6 mb-2 text-[13px] [&>li]:relative [&>li]:after:absolute [&>li]:after:-left-4 [&>li]:after:text-primary [&>li]:after:content-['●']">
                     <li>
                        <Link href="/">Home</Link>
                     </li>
                     <li>
                        <Link href="/about-us">About Us</Link>
                     </li>
                     <li>
                        <Link href="/services">Services</Link>
                     </li>
                     <li>
                        <Link href="/portfolio">Portfolio</Link>
                     </li>
                     <li>
                        <Link href="/blog">Blog</Link>
                     </li>
                     <li>
                        <Link href="/career">Career</Link>
                     </li>
                     <li>
                        <Link href="/contact">Contact</Link>
                     </li>
                  </ul>
               </div>

               <div className="w-full md:w-1/4">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                     <a
                        href="https://www.facebook.com/adhousecalicut/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 rounded-[2px]"
                     >
                        <FaFacebookF size={20} />
                     </a>
                     <a
                        href="https://www.instagram.com/adhouse.advertising"
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 rounded-[2px]"
                     >
                        <FaInstagram size={20} />
                     </a>
                     <a
                        href="https://www.linkedin.com/company/hello-adhouse-advertising/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 rounded-[2px]"
                     >
                        <FaLinkedinIn size={20} />
                     </a>
                     <a href="#" target="_blank" rel="noreferrer" className="p-1 rounded-[2px]">
                        <FaBehance size={20} />
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div className="overflow-hidden bg-primary py-2">
            <ul className="marquee text-white flex items-center gap-24 text-xl leading-none">
               <li>BRANDING</li>
               <li>CREATIVES</li>
               <li>DIGITAL MARKETING</li>
               <li>VIDEO PRODUCTION</li>
               <li>WEBSITE DESIGNING</li>
               <li>EVENTS</li>
               <li>PRODUCT PACKAGING</li>
               <li>BRANDING</li>
               <li>CREATIVES</li>
               <li>DIGITAL MARKETING</li>
               <li>VIDEO PRODUCTION</li>
               <li>WEBSITE DESIGNING</li>
               <li>EVENTS</li>
               <li>PRODUCT PACKAGING</li>
               <li>BRANDING</li>
               <li>CREATIVES</li>
               <li>DIGITAL MARKETING</li>
               <li>VIDEO PRODUCTION</li>
               <li>WEBSITE DESIGNING</li>
               <li>EVENTS</li>
               <li>PRODUCT PACKAGING</li>
            </ul>
         </div>
      </footer>
   );
};

export default Footer;
