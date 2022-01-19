import React, { FunctionComponent } from "react";

import { useColorMode } from "theme-ui";

import {
  Box,
  Button,
  Flex,
  Text,
} from "@components";

export type SectionHomeProps = {};

export const SectionHome: FunctionComponent<SectionHomeProps> = () => {
  const [colorMode, setColorMode] = useColorMode();

  const homeTitle = "어이 Hello, I'm Mathieu a full stack developer building something special and mostly foucs on these technologies. I'm currently fully employed at QMIT Inc. | 저는 웹 개발자입니다. and live in SEOUL KOREA.";

  return (
    <Flex
      sx={{
        height: "100vh",
        backgroundColor: "#F2F2F2", // TODO: add color to theme (color/on-color pair)
        alignItems: "center",
      }}>
      <Box
        sx={{
          width: ["50%"],
          px: [8],
        }}>
        <Text variant={"heading3"}>
          {homeTitle}
        </Text>
        <Button variant={"primary"} size={"lg"} shape={"round"} onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}>
          {"Change theme"}
        </Button>
      </Box>
    </Flex>
  );
};
