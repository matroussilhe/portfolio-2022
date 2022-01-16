import React, { FunctionComponent } from "react";

import { useColorMode } from "theme-ui";

import {
  Box,
  Button,
  Flex,
  SectionArchive,
  Tag,
  Text,
} from "@components";

export type LayoutIndexProps = {
  homeTitle: string;
  workTitle: string;
  archiveTitle: string;
  footerTitle: string;
};

export const LayoutIndex: FunctionComponent<LayoutIndexProps> = ({
  homeTitle,
  workTitle,
  archiveTitle,
  footerTitle,
}) => {
  // DEBUG: color mode change
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <Flex
        sx={{
          height: "100vh",
          backgroundColor: "background",
          alignItems: "center",
        }}>
        <Box
          sx={{
            width: ["50%"],
            pl: [6],
          }}>
          <Text variant={"heading3"}>
            {homeTitle}
          </Text>
          <Button variant={"primary"} size={"lg"} shape={"round"} onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}>
            {"Change theme"}
          </Button>
          <Button variant={"secondary"} size={"md"} shape={"square"}>
            {"Informations"}
          </Button>
          <Button>
            {"Informations"}
          </Button>
          <Tag variant={"primary"} size={"lg"} shape={"round"}>
            {"React"}
          </Tag>
          <Tag variant={"secondary"} size={"md"} shape={"square"}>
            {"Vue.js"}
          </Tag>
          <Tag>
            {"AWS"}
          </Tag>
        </Box>
      </Flex>
      <Flex
        sx={{
          height: "100vh",
          backgroundColor: "background",
        }}>
        <Box
          sx={{
            width: ["100%"],
            pl: [6],
            mt: [10],
          }}>
          <Text variant={"heading3"}>
            {workTitle}
          </Text>
        </Box>
      </Flex>
      <SectionArchive
        title={archiveTitle}
        archives={[]}
      />
      <Flex
        sx={{
          height: "50vh",
          backgroundColor: "background",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text variant={"heading2"}>
          {footerTitle}
        </Text>
      </Flex>
    </>
  );
};
