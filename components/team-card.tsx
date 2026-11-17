import { TeamMember } from '@/types';
import Image from 'next/image';
import React from 'react';

export const TeamCard = ({ member }: { member: TeamMember }) => {
   return (
      <div key={member.id} className="mb-3 w-full md:w-[calc(25%-1.5rem)]">
         <Image
            src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + member.image.url}
            alt={member.name}
            className="w-full h-auto rounded-lg"
            width={350}
            height={200}
         />
         <div className="text-center py-2">
            <h2 className="text-xl font-semibold text-white">{member.name}</h2>
            <p className="text-primary text-xs">{member.designation?.name || ''}</p>
         </div>
      </div>
   );
};
