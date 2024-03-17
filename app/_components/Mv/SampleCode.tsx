"use client";

import { Box } from "@chakra-ui/react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";
import Typewriter from "react-ts-typewriter";

const padding = {
  outer: 16,
  inner: 10,
} as const;
const fontSize = 16;
const borderRadius = 8;
const container = {
  width: 400,
  height: 400,
} as const;

const code = `/**
 * Button label
 * @type {text} button label
 */
const buttonLabel = "Click me";

/**
 * Returns greeting message
 * @param {string} user - user name
 * @returns {string} greeting text
 */
function getGreetingText(user){
  return \`hello \${user}!\`
}`;

export const SampleCode = () => {
  const [finished, setFinished] = useState(false);

  return (
    <Box
      w={container.width}
      h={container.height}
      bgColor="black"
      opacity={0.8}
      borderRadius={borderRadius}
    >
      {!finished ? (
        <Box
          whiteSpace="pre"
          p={padding.outer + padding.inner}
          color="white"
          fontSize={fontSize}
        >
          <Typewriter
            text={code}
            onFinished={() => setFinished(true)}
            speed={1}
          />
        </Box>
      ) : (
        <CodeEditor
          value={code}
          language="js"
          padding={padding.outer}
          style={{
            fontSize,
            borderRadius,
            padding: padding.inner,
            backgroundColor: "black",
          }}
        />
      )}
    </Box>
  );
};
