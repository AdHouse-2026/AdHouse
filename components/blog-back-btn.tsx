'use client';

import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from 'lucide-react';

export default function BlogBackBtn() {
   const router = useRouter();
   return (
      <div className="sticky top-2 z-10">
         <Button onClick={() => router.back()}>
            <ArrowLeftIcon /> Back
         </Button>
      </div>
   );
}
