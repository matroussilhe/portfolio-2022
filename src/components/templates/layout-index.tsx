import React, { Fragment, FunctionComponent } from "react";

import { useColorMode } from "theme-ui";

import {
  Box,
  Button,
  Flex,
  SectionArchive,
  SectionWork,
  Text,
} from "@components";
import {
  Archive,
  Work,
} from "@utils";

export type LayoutIndexProps = {
  works: Work[];
  archives: Archive[];
};

export const LayoutIndex: FunctionComponent<LayoutIndexProps> = ({
  works,
  archives,
}) => {
  // DEBUG: color mode change
  const [colorMode, setColorMode] = useColorMode();

  // DEBUG: placeholders
  const homeTitle = "어이 Hello, I'm Mathieu a full stack developer building something special and mostly foucs on these technologies. I'm currently fully employed at QMIT Inc. | 저는 웹 개발자입니다. and live in SEOUL KOREA.";
  const footerTitle = "FOOTER";

  return (
    <Fragment>
      <Flex
        sx={{
          height: "100vh",
          backgroundColor: "background",
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
      <SectionWork
        title={"Selected Work"}
        works={works}
      />
      <SectionArchive
        title={"Archive"}
        archives={archives}
      />
      <Flex
        sx={{
          height: "50vh",
          backgroundColor: "background",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text variant={"heading1"}>
          {footerTitle}
        </Text>
      </Flex>
    </Fragment>
  );
};
