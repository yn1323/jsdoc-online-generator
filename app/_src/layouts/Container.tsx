"use client";

import { Heading } from "@/app/_components/Heading";
import { useScreenSize } from "@/app/_src/hooks/ui/useScreenSize";
import { Box, VStack } from "@chakra-ui/react";

type Props = {
  serverComponent: React.ReactNode;
};

export const Container = ({ serverComponent }: Props) => {
  const { isPC, breakpoints } = useScreenSize();

  return (
    <VStack w="100vw">
      <Heading />
      <Box w={isPC ? breakpoints : "100%"}>{serverComponent}</Box>
    </VStack>
  );
};
