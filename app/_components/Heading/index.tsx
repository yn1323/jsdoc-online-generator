"use client";

import { HStack, Heading as LibHeading, IconButton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export const Heading = () => {
  return (
    <HStack p={4} justifyContent="space-between" w="100%" shadow="md">
      <LibHeading as="h1" size="lg">
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
  );
};
