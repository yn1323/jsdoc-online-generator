"use client";

import { jsdocGenerate } from "@/app/_src/actions/jsdocGenerate";
import { useCustomToast } from "@/app/_src/hooks/ui/useCustomToast";
import { Button, FormControl, FormLabel, InputGroup } from "@chakra-ui/react";
import { useRef, useState } from "react";

const MaxFileSize = 1;

const AcceptFileExtension = [
  "js",
  "ts",
  "jsx",
  "tsx",
  "json",
  "md",
  "vue",
  "html",
  "txt",
];

type Props = {
  handleSuccess: (id: number) => void;
};

export const FileUploader = ({ handleSuccess }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { errorToast } = useCustomToast();

  const onClickButton = () => {
    inputRef.current?.click();
  };

  return (
    <form>
      <FormControl id="Generate From File">
        <FormLabel>Generate from file</FormLabel>
        <Button
          onClick={() => onClickButton()}
          isLoading={isLoading}
          colorScheme="teal"
        >
          File Select
        </Button>
        <InputGroup>
          <input
            type="file"
            hidden
            ref={inputRef}
            onChange={async (e) => {
              setIsLoading(true);
              if (!e.target.files) return;
              const { type, size, name } = e.target.files[0];

              if (type !== "" && type !== "text/javascript") {
                errorToast({
                  title: "File Error",
                  description: "File must be .js, .ts, .jsx, .tsx, or .vue",
                });
                setIsLoading(false);
                return;
              }

              if (
                AcceptFileExtension.every(
                  (extension) => !name.endsWith(extension),
                )
              ) {
                errorToast({
                  title: "Extension Error",
                  description:
                    "Extension must be .js, .ts, .jsx, .tsx, or .vue",
                });
                setIsLoading(false);
                return;
              }

              if (size / 1024 ** 2 > MaxFileSize) {
                errorToast({
                  title: "File Size Error",
                  description: `File Size must be below ${MaxFileSize}MB`,
                });
                setIsLoading(false);
                return;
              }
              const fileText = await readAsTextReader(e.target.files[0]);

              if (typeof fileText === "string") {
                const generatedId = await jsdocGenerate(fileText);
                if (!generatedId) {
                  errorToast({
                    title: "Generate Error",
                    description: "Generate failed. Please try again",
                  });
                  setIsLoading(false);
                  return;
                }
                handleSuccess(generatedId);
              }

              setIsLoading(false);
            }}
          />
        </InputGroup>
      </FormControl>
    </form>
  );
};

const readAsTextReader = (file: FileList[number]) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.readAsText(file);
  });
};
