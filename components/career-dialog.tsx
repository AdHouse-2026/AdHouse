'use client';

import { Button } from '@/components/ui/button';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { useState } from 'react';
import CareerForm from './career-form';

export function CareerDialog() {
   const [open, setOpen] = useState<boolean>(false);
   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button className="rounded-3xl mt-4">Apply Now</Button>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <Image src={'/adhouse-logo.png'} alt="AdHouse Logo" width={100} height={100} />
               <DialogTitle></DialogTitle>
               <DialogDescription></DialogDescription>
            </DialogHeader>
            <CareerForm />
         </DialogContent>
      </Dialog>
   );
}
