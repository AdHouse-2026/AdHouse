"use client";

import testiIcon from "@/public/testimonail_icon.svg";
import { Testimonial } from "@/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials({ data }: { data: Testimonial[] }) {
	const [nav1, setNav1] = useState<Slider | null>(null);
	const [nav2, setNav2] = useState<Slider | null>(null);
	const sliderRef1 = useRef<Slider>(null);
	const sliderRef2 = useRef<Slider>(null);
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		if (sliderRef1.current && sliderRef2.current) {
			setNav1(sliderRef1.current);
			setNav2(sliderRef2.current);
		}
	}, []);

	const handleBeforeChange = (oldIndex: number, newIndex: number) => {
		setActiveSlide(newIndex);
	};

	const thumbnailSliderSettings = {
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		centerMode: true,
		autoplay: true,
		focusOnSelect: true,
		centerPadding: "20px",
		asNavFor: nav2 ?? undefined,
		speed: 500,
	};

	// Slider settings
	const mainSliderSettings = {
		autoplay: true,
		autoplaySpeed: 6000,
		arrows: false,
		fade: true,
		asNavFor: nav1 ?? undefined,
	};

	return (
		<section className="py-20 md:py-36">
			<div className="container text-white">
				<div className="flex flex-wrap items-center justify-center">
					{/* Thumbnail Slider */}
					<div className="w-full md:w-[41.66666667%]">
						<Slider
							{...thumbnailSliderSettings}
							ref={sliderRef1}
							slidesToShow={3}
							swipeToSlide
							focusOnSelect
							beforeChange={handleBeforeChange}
						>
							{data.map((item, index) => (
								<div className="flex items-center py-6 max-md:gap-x-3 justify-center" key={item.id}>
									<Image
										src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item.images.url}
										alt={item.name}
										width={100}
										height={100}
										className={`rounded-full mx-auto cursor-pointer  object-cover ${
											index === activeSlide ? "active-image size-20 md:size-24" : "size-16 md:size-20"
										}`}
									/>
								</div>
							))}
						</Slider>
					</div>

					{/* Main Slider */}
					<div className="w-full max-md:px-4 md:w-[41.66666667%]">
						<Image src={testiIcon} width={80} height={80} alt="testimonial" className="mb-4" />
						<Slider {...mainSliderSettings} ref={sliderRef2} className="testimonial-slider">
							{data.map((item) => (
								<div key={item.id}>
									<p className="font-light text-justify">{item.feedback}</p>
									<div className="my-2 flex items-center gap-x-1 text-primary">
										{[...Array(item.rating)].map((_, i) => (
											<FaStar key={i} size={20} />
										))}
									</div>
									<h2 className="text-2xl font-semibold">{item.name}</h2>
									<h3>{item?.designation}</h3>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
}
