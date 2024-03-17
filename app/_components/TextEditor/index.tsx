"use client";

import { jsdocGenerate } from "@/app/_src/actions/jsdocGenerate";
import { useCustomToast } from "@/app/_src/hooks/ui/useCustomToast";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { useState, useTransition } from "react";

const MaxTextLength = 4000;
type Props = {
  handleSuccess: (id: number) => void;
};

export const TextEditor = ({ handleSuccess }: Props) => {
  const [_, startTransition] = useTransition();
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { errorToast } = useCustomToast();

  const onClickButton = async () => {
    if (text.length === 0) {
      errorToast({
        title: "No Text Error",
        description: "Text must be entered",
      });
      return;
    }
    if (text.length > MaxTextLength) {
      errorToast({
        title: "Text Length Error",
        description: `Text length must be less than ${MaxTextLength}`,
      });
      return;
    }

    setIsLoading(true);
    const generatedId = await jsdocGenerate(text);
    if (!generatedId) {
      errorToast({
        title: "Generate Error",
        description: "Generate failed. Please try again",
      });
      setIsLoading(false);
      return;
    }
    handleSuccess(generatedId);
    setIsLoading(false);
  };

  const onChangeText = (nextText: string) => {
    startTransition(() => {
      setText(nextText);
    });
  };

  return (
    <form>
      <FormControl id="Generate from text">
        <FormLabel>Generate from text</FormLabel>
        <Textarea onChange={(e) => onChangeText(e.target.value)} h={400} />
        <Box textAlign="right" mt={4}>
          <Button
            onClick={() => onClickButton()}
            isLoading={isLoading}
            colorScheme="teal"
          >
            Generate
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};
