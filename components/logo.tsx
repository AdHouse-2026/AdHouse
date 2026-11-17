import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import adHouseLogo from '@/public/adhouse-logo.png';

export default function Logo() {
   return (
      <Link href="/">
         <Image
            priority
            className="h-10 w-auto"
            src={adHouseLogo}
            alt="AdHouse Logo"
            sizes="100%"
            width={200} // Explicit width for preventing layout shift
            height={50} // Explicit height for preventing layout shift
         />
      </Link>
   );
}
