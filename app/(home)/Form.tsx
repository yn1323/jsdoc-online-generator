"use client";
import { FileUploader } from "@/app/_components/FileUploader";
import { TextEditor } from "@/app/_components/TextEditor";
import { Box } from "@chakra-ui/react";

export const Form = () => {
  const handleSuccess = (id: number) => {
    window.open(`generated/${id}`);
  };

  return (
    <Box id="form">
      <FileUploader handleSuccess={handleSuccess} />
      <Box pt={10}>
        <TextEditor handleSuccess={handleSuccess} />
      </Box>
    </Box>
  );
};
