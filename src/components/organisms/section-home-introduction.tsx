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
              text={"안녕! I'm Mathieu, a Fullstack Engineer"}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"who loves building all kinds of products"}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"using creative and systematic solutions."}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"I'm currently fully employed at QMIT"}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"and live in Seoul, Korea."}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
          </Fragment>
        ) : (
          <Fragment
            key={generateId()}>
            <TextAnimated
              text={"Hi! 저는 풀스택 엔지니어 Mathieu입니다"}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"창의적이고 체계적인 솔루션을 사용하여"}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"모든 종류의 제품을 만드는 것을 좋아하는 사람입니다."}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"저는 현재 QMIT에 완전히 고용되어"}
              options={{
                duration: 900,
                delay: 0,
              }}
            />
            <TextAnimated
              text={"한국 서울에 살고 있습니다."}
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
