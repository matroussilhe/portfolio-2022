import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  TextAnimated,
} from "@components";

export type SectionHomeIntroductionProps = {};

export const SectionHomeIntroduction: FunctionComponent<SectionHomeIntroductionProps> = () => {
  return (
    <Flex
      sx={{
        alignItems: "center",
      }}>
      <Box
        sx={{
          px: 6,
        }}>
        <TextAnimated>
          {"아이 Hello, I'm Mathieu a full stack developer"}
        </TextAnimated>
        <TextAnimated>
          {"building something special and mostly"}
        </TextAnimated>
        <TextAnimated>
          {"focus on these technologies. I'm currently"}
        </TextAnimated>
        <TextAnimated>
          {"fully employed at QMIT Inc. | 저는 웹 개발자"}
        </TextAnimated>
        <TextAnimated>
          {"입니다. and live in SEOUL KOREA."}
        </TextAnimated>
      </Box>
    </Flex>
  );
};
