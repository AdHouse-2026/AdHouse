import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Best Advertising Agency In Calicut, Kochi & Banglore | Adhouse Advertising",
	description:
		"Adhouse Advertising is the best advertising agency in Calicut & Kochi, Kerala. Offering expert strategies, innovative campaigns, and exceptional results to elevate your brand's visibility.",
	keywords:
		"advertising agency in Calicut, Advertising Agency in Calicut, Digital Marketing Agency, Video Ads, Branding, Creatives, Product Packaging, Printables, Kochi, Kerala",
};

const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Adhouse Advertising",
	image: "https://adhouseadvertising.in/assets/images/adhouse_logo.webp",
	"@id": "https://adhouseadvertising.in/services.html",
	url: "https://adhouseadvertising.in/services.html",
	telephone: "9747550515",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Adhouse Advertising, Kottaram Rd, Kozhikode, Kerala, 682307, IND",
		addressLocality: "Kozhikode",
		postalCode: "682307",
		addressCountry: "IN",
	},
	priceRange: "Contact: +91 9747550515 | Email : info@adhouseadvertising.in",
	sameAs: [
		"https://www.facebook.com/adhouseadvertising",
		"https://twitter.com/adhouseadv",
		"https://www.linkedin.com/company/adhouse-advertising",
		"https://www.instagram.com/adhouseadvertising",
	],
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "09:00",
			closes: "17:30",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
				/>
				<meta name="google-site-verification" content="cr1W4erXgTDgAORTs7fcnx0WR-0xu9Tu8ZeKyKRFnvc" />
			</head>
			<body className={`${poppins.className} font-sans antialiased`}>
				<Header />
				<main className="bg-[#1d1d28] md:min-h-dvh">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
