'use client';

import React, { useEffect, useState } from 'react';

export default function Preloader() {
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoaded(true);
      }, 2000);

      // Cleanup function to clear the timeout
      return () => clearTimeout(timer);
   }, []);

   useEffect(() => {
      if (isLoaded) {
         const removePreloaderTimer = setTimeout(() => {
            const preloaderElement = document.getElementById('preloader');
            if (preloaderElement && preloaderElement.parentNode) {
               preloaderElement.parentNode.removeChild(preloaderElement);
            }
         }, 500);
         return () => clearTimeout(removePreloaderTimer);
      }
   }, [isLoaded]);

   return (
      <div id="preloader" className={isLoaded ? 'loaded' : ''}>
         <div id="container" className="container-preloader">
            <div className="animation-preloader">
               <div className="txt-loading">
                  {'ad.house'.split('').map((char, index) => (
                     <span key={index} preloader-text={char} className="characters">
                        {char}
                     </span>
                  ))}
               </div>
            </div>
            <div className="loader-section"></div>
         </div>
      </div>
   );
}
