type ImageFormats = {
	small: { url: string };
	thumbnail: { url: string };
	large: { url: string };
};

export type ImageProps = {
	url: string;
	documentId: string;
	formats: ImageFormats;
};

export type ChidrenProps = {
	text: string;
	type: string;
	children?: ChidrenProps[];
};

export type ContentProps = {
	type: string;
	format?: string;
	level?: number;
	children: ChidrenProps[];
};

export type BlogProps = {
	content: string;
	featured: boolean;
};

export type dataProps = {
	id: number;
	documentId: string;
	slug: string;
	title: string;
	images?: ImageProps[];
	image?: ImageProps;
	link?: string;
	publishedAt: string;
	createdAt: string;
	updatedAt: string;
	content?: ContentProps[];
	featured?: boolean;
	seo: {
		description: string;
		keywords: string[];
	};
};

export interface TeamMember {
	id: number;
	documentId: string;
	name: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	position: number | null;
	image: {
		id: number;
		documentId: string;
		name: string;
		width: number;
		height: number;
		url: string;
	};
	designation?: {
		id: number;
		documentId: string;
		name: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	};
	level?: {
		id: number;
		documentId: string;
		name: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	};
}

export interface Testimonial {
	id: number;
	documentId: string;
	rating: number;
	name: string;
	feedback: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	images: ImageProps;
	designation: string;
}
