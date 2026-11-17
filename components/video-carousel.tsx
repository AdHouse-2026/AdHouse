"use client";

import React from "react";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { dataProps } from "@/types";
import Image from "next/image";
import youtube from "@/public/youtube.png";
import VideoDialog from "./video-dialog";

interface VideoAdProps {
	data: dataProps[];
}

export default function VideoCarousel({ data }: VideoAdProps) {
	return (
		<Carousel
			opts={{
				align: "center",
				loop: true,
			}}
			className="w-full"
		>
			<CarouselContent className="flex  md:gap-4">
				{data.map((item, index) => (
					<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
						<div className="relative h-64 w-full rounded-lg overflow-hidden">
							{item.image && (
								<Image
									className="object-cover"
									priority
									src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item.image?.formats.large.url}
									alt="Slider Image"
									fill
								/>
							)}
							<div className="absolute inset-0 z-10 flex items-center justify-center bg-black/15 backdrop-blur-0">
								{item?.link && (
									<VideoDialog videoUrl={item.link}>
										<Image
											className="object-cover cursor-pointer"
											src={youtube}
											alt="Youtube Icon"
											width={100}
											height={50}
										/>
									</VideoDialog>
								)}
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
