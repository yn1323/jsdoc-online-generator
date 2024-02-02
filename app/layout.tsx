import GoogleAnalytics from "@/app/_components/GoogleAnalytics";
import { Providers } from "@/app/_src/configs/Providers";
import { Container } from "@/app/_src/layouts/Container";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JSDoc Document Online Generator",
	description:
		"Generates JSDoc document for free and online. Uploaded JSDoc will be deleted in 30 minutes for security reasons. ; )",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<GoogleAnalytics />
			</head>
			<body>
				<Providers>
					<Container serverComponent={children} />
				</Providers>
			</body>
		</html>
	);
}
