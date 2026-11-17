import BlogBackBtn from "@/components/blog-back-btn";
import BlogDetails from "@/components/blog-details";
import api from "@/lib/globalApi";
import React from "react";

type Props = {
	params: Promise<{ blogId: string }>;
};

export async function generateMetadata({ params }: Props) {
	const blogId = (await params)?.blogId;
	if (!blogId) return {};

	try {
		const { data: blog } = await api.getBlogDetails(blogId);

		const title = blog?.title || "Blog Details | My Blog";
		const description = blog?.seo?.description || "Read insightful stories and articles from our blog.";
		const keywords = blog?.seo?.keywords || [];
		const imageUrl = blog?.image?.url ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${blog.image.url}` : "/default-og-image.jpg"; // fallback image

		return {
			title,
			description,
			keywords,
			openGraph: {
				title,
				description,
				type: "article",
				url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blogId}`,
				images: [
					{
						url: imageUrl,
						width: 1200,
						height: 630,
						alt: title,
					},
				],
			},
			twitter: {
				card: "summary_large_image",
				title,
				description,
				images: [imageUrl],
			},
		};
	} catch (error) {
		console.error("Error generating metadata:", error);
		return {
			title: "Blog Details | My Blog",
			description: "Discover inspiring stories and design insights.",
		};
	}
}

export default async function BlogDetailsPage({ params }: Props) {
	const blogId = (await params).blogId;
	if (!blogId) return null;
	const { data: blog } = await api.getBlogDetails(blogId, { next: { revalidate: 1 } });

	return (
		<div>
			<section className="bg-white pt-32 pb-5">
				<header className="min-h-[300px] flex flex-col items-center justify-center text-center mb-3">
					<div className="container">
						<h1 className="text-3xl md:text-5xl">
							<span className="font-medium">Explore the stories of </span>{" "}
							<span className="font-bold block mt-1 md:text-6xl">Design</span>
						</h1>
					</div>
				</header>
			</section>

			<section className="py-4 relative">
				<span className="bg-primary h-[10px] left-[30%] right-[30%] w-auto absolute -top-1.5 rounded-full"></span>
				<div className="container mx-auto py-14">
					<BlogBackBtn />
					<BlogDetails data={blog} />
				</div>
				<span className="bg-primary h-[10px] left-[30%] right-[30%] w-auto absolute -bottom-1.5 rounded-full"></span>
			</section>
		</div>
	);
}
