import React, { Fragment, FunctionComponent, useState } from "react";

import {
  Box,
  Flex,
  TextAnimated,
} from "@components";
import { generateId } from "@services";

export type SectionHomeIntroductionMode = "en" | "ko";

export type SectionHomeIntroductionProps = {};

export const SectionHomeIntroduction: FunctionComponent<SectionHomeIntroductionProps> = () => {
  const [mode, setMode] = useState<SectionHomeIntroductionMode>("en");

  // toggle mode on click
  const handleClick = () => {
    const newMode = mode === "en" ? "ko" : "en";

    setMode(newMode);
  };

  return (
    <Flex
      sx={{
        alignItems: "center",
      }}>
      <Box
        onClick={handleClick}
        sx={{
          px: 6,
          cursor: "pointer",
        }}>
        {mode === "en" ? (
          <Fragment
            key={generateId()}>
            <TextAnimated
              text={"아이! Hello, I'm Mathieu a full stack developer"}
              duration={1500}
              delay={0}
            />
            <TextAnimated
              text={"building something special and mostly"}
              duration={1500}
              delay={1500}
            />
            <TextAnimated
              text={"focus on these technologies. I'm currently"}
              duration={1500}
              delay={3000}
            />
            <TextAnimated
              text={"fully employed at QMIT Inc."}
              duration={1500}
              delay={4500}
            />
            <TextAnimated
              text={"and live in SEOUL KOREA."}
              duration={1500}
              delay={6000}
            />
          </Fragment>
        ) : (
          <Fragment
            key={generateId()}>
            <TextAnimated
              text={"Hi! 안녕, 저는 풀 스택 개발자인 Mathieu입니다."}
              duration={1500}
              delay={0}
            />
            <TextAnimated
              text={"특별하고 대부분인 무언가를 짓는 것"}
              duration={1500}
              delay={1500}
            />
            <TextAnimated
              text={"이러한 기술에 집중합니다. 저는 지금"}
              duration={1000}
              delay={3000}
            />
            <TextAnimated
              text={"QMIT Inc. 주식회사의 완전 고용"}
              duration={1000}
              delay={4500}
            />
            <TextAnimated
              text={"그리고 서울 코리아에 살고 있습니다."}
              duration={1000}
              delay={6000}
            />
          </Fragment>
        )}
      </Box>
    </Flex>
  );
};
