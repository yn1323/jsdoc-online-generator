import { Heading } from "@/app/_components/Heading";
import { Box } from "@chakra-ui/react";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<Heading />
			<Box p="4">{children}</Box>
		</main>
	);
}
