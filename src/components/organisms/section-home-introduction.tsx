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
        <TextAnimated
          text={"아이 Hello, I'm Mathieu a full stack developer"}
          delay={0}
        />
        <TextAnimated
          text={"building something special and mostly"}
          delay={250}
        />
        <TextAnimated
          text={"focus on these technologies. I'm currently"}
          delay={500}
        />
        <TextAnimated
          text={"fully employed at QMIT Inc. | 저는 웹 개발자"}
          delay={750}
        />
        <TextAnimated
          text={"입니다. and live in SEOUL KOREA."}
          delay={1000}
        />
      </Box>
    </Flex>
  );
};
