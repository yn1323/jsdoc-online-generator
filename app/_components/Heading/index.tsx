"use client";

import { useScreenSize } from "@/app/_src/hooks/ui/useScreenSize";
import {
  Box,
  Center,
  HStack,
  IconButton,
  Heading as LibHeading,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export const Heading = () => {
  const { isPC, breakpoints } = useScreenSize();
  const router = useRouter();

  return (
    <Center p={4} w="100%" shadow="md">
      <Box w={isPC ? breakpoints : "100%"}>
        <HStack justifyContent="space-between" w="100%">
          <LibHeading
            as="h1"
            size="lg"
            cursor="pointer"
            onClick={() => router.push("/")}
          >
            JSDoc Online Generator
          </LibHeading>
          <a
            href="https://github.com/yn1323/jsdoc-online-generator"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github link"
          >
            <IconButton
              isRound={true}
              variant="ghost"
              aria-label="GitHub"
              fontSize="24px"
              icon={<FaGithub />}
            />
          </a>
        </HStack>
      </Box>
    </Center>
  );
};
