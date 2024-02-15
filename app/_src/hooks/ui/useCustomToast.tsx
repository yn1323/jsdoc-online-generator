import { UseToastOptions, useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useCustomToast = () => {
  const toast = useToast({
    position: "top-right",
    duration: 5000,
    isClosable: true,
  });

  const successToast = useCallback(
    ({
      title,
      description,
    }: Pick<UseToastOptions, "title" | "description">) => {
      toast({
        title,
        description,
        status: "success",
      });
    },
    [toast],
  );

  const errorToast = useCallback(
    ({
      title,
      description,
    }: Pick<UseToastOptions, "title" | "description">) => {
      toast({
        title,
        description,
        status: "error",
      });
    },
    [toast],
  );

  return { successToast, errorToast };
};
