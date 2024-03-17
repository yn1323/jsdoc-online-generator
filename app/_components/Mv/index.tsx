"use client";

import { SampleCode } from "@/app/_components/Mv/SampleCode";
import { SampleDoc } from "@/app/_components/Mv/SampleDoc";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Heading, VStack } from "@chakra-ui/react";

export const Mv = () => {
  return (
    <Box>
      <VStack py={10} gap={10}>
        <Heading as="h3" fontSize={26}>
          Convert JSDoc comment to HTML Document
        </Heading>
        <Button colorScheme="teal" size="lg" as="a" href="#form">
          Try Now!
        </Button>
      </VStack>
      <HStack justifyContent="center" w="100%">
        <SampleCode />
        <Box px="80px">
          <ArrowRightIcon fontSize={30} />
        </Box>
        <SampleDoc />
      </HStack>
    </Box>
  );
};
