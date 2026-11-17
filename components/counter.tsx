'use client';

import React, { useEffect, useState } from 'react';

type CounterProps = {
   id: string;
   start: number;
   end: number;
   duration: number;
   text?: string;
};

export default function Counter({ id, start, end, duration, text }: CounterProps) {
   const [current, setCurrent] = useState(start);

   useEffect(() => {
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const step = Math.abs(Math.floor(duration / Math.abs(range)));
      let timer: NodeJS.Timeout;

      if (range !== 0) {
         timer = setInterval(() => {
            setCurrent((prev) => {
               if (prev === end) {
                  clearInterval(timer);
                  return prev;
               }
               return prev + increment;
            });
         }, step);
      }

      return () => clearInterval(timer); // Clean up on unmount
   }, [start, end, duration]);

   return (
      <div id={id} className="font-bold text-3xl md:text-[100px] text-primary leading-none">
         {current}
         {text && text}
      </div>
   );
}
