'use client';

import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger
} from '@/components/ui/dialog';
import React, { useEffect, useState } from 'react';

interface VideoDialogProps {
   children: React.ReactNode;
   videoUrl: string;
}

export default function VideoDialog({ children, videoUrl }: VideoDialogProps) {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const getEmbedUrl = (url: string) => {
      const videoIdMatch = url.match(
         /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/
      );
      return videoIdMatch
         ? `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1&mute=1`
         : url;
   };

   const embedUrl = getEmbedUrl(videoUrl);

   const [src, setSrc] = useState<string>(embedUrl);
   useEffect(() => {
      if (isOpen) {
         setSrc(embedUrl); // Update the src to trigger reload
      }
   }, [isOpen, embedUrl]);

   return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className="px-0 pb-0 h-auto max-w-2xl">
            <DialogHeader>
               <DialogTitle></DialogTitle>
               <div className="aspect-video w-full pt-3">
                  <iframe
                     key={src} // Ensures re-rendering when src changes
                     className="w-full h-full rounded-b-lg"
                     src={src}
                     title="YouTube video player"
                     allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                  />
               </div>
            </DialogHeader>
         </DialogContent>
      </Dialog>
   );
}
