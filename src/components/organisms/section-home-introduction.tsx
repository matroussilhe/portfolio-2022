import React, { Fragment, FunctionComponent, useState } from "react";

import {
  Box,
  Flex,
  FlexProps,
  TextAnimated,
} from "@components";
import { generateId } from "@services";

export type SectionHomeIntroductionMode = "en" | "ko";

export type SectionHomeIntroductionProps = FlexProps & {};

export const SectionHomeIntroduction: FunctionComponent<SectionHomeIntroductionProps> = ({
  ...rest
}) => {
  const [mode, setMode] = useState<SectionHomeIntroductionMode>("en");

  // toggle mode on click
  const handleClick = () => {
    const newMode = mode === "en" ? "ko" : "en";

    setMode(newMode);
  };

  return (
    <Flex
      {...rest}>
      <Box
        onClick={handleClick}
        sx={{
          cursor: "pointer",
        }}>
        {mode === "en" ? (
          <Fragment
            key={generateId()}>
            <TextAnimated
              text={"아이! Hello, I'm Mathieu a Fullstack Engineer"}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"building something special and mostly"}
              options={{
                duration: 900,
                delay: 900,
              }}
            />
            <TextAnimated
              text={"focus on these technologies. I'm currently"}
              options={{
                duration: 900,
                delay: 1800,
              }}
            />
            <TextAnimated
              text={"fully employed at QMIT Inc."}
              options={{
                duration: 900,
                delay: 2700,
              }}
            />
            <TextAnimated
              text={"and live in SEOUL KOREA."}
              options={{
                duration: 900,
                delay: 3600,
              }}
            />
          </Fragment>
        ) : (
          <Fragment
            key={generateId()}>
            <TextAnimated
              text={"Hi! 안녕, 저는 풀 스택 개발자인 Mathieu입니다."}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"특별하고 대부분인 무언가를 짓는 것"}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"이러한 기술에 집중합니다. 저는 지금"}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"QMIT Inc. 주식회사의 완전 고용"}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"그리고 서울 코리아에 살고 있습니다."}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
          </Fragment>
        )}
      </Box>
    </Flex>
  );
};
