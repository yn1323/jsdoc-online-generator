import { Providers } from "@/app/_src/configs/Providers";
import { Container } from "@/app/_src/layouts/Container";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JSDoc Online Generator",
	description: "Generated JSDoc Web Page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Container serverComponent={children} />
				</Providers>
			</body>
		</html>
	);
}
