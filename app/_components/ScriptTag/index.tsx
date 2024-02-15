"use client";
import { useEffect } from "react";

type Props = {
  filePath: string;
};

export const ScriptTag = ({ filePath }: Props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = filePath;
    document.body.appendChild(script);
    return;
  }, [filePath]);
  return <div />;
};
