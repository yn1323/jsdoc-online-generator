import { useMediaQuery, useTheme } from "@chakra-ui/react";

export const useScreenSize = () => {
	const theme = useTheme();
	const [isSmallerThan] = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

	return {
		breakpoints: theme.breakpoints,
		isPC: !isSmallerThan,
		isSP: isSmallerThan,
	};
};
