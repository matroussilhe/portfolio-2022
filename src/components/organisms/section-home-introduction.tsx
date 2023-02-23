import React, {
  Fragment,
  FunctionComponent,
} from "react";

import {
  Box,
  Flex,
  FlexProps,
  Responsive,
  TextAnimated,
  TextAnimatedOptions,
} from "@components";
import {
  usePreferenceContext,
  useResponsiveContext,
} from "@hooks";

export type SectionIntroductionMode = "en" | "ko";

export type SectionHomeIntroductionProps = FlexProps & {};

export const SectionHomeIntroduction: FunctionComponent<SectionHomeIntroductionProps> = ({
  ...rest
}) => {
  const { smOnly } = useResponsiveContext();
  const {
    introductionMode: mode,
    setIntroductionMode: setMode,
  } = usePreferenceContext();

  // toggle mode on click
  const handleClick = () => {
    const newMode = mode === "en" ? "ko" : "en";

    setMode(newMode);
  };

  // get props by breakpoint and mode
  const texts = {
    smOnly: {
      en: [
        "안녕! I'm Mathieu,",
        "a Fullstack Engineer",
        "who loves building",
        "all kinds of products",
        "using creative and",
        "systematic solutions.",
        "I'm currently fully employed",
        "at Dataiku and",
        "live in Toulouse, France.",
      ],
      ko: [
        "Hello! 저는 Mathieu입니다.",
        "창의적이고 체계적인",
        "솔루션을 활용하여",
        "모든 종류의 제품을",
        "만드는 것을 좋아하는",
        "풀스택 개발자입니다.",
        "저는 현재 Dataiku에서",
        "풀타임으로 일하며",
        "프랑스 툴루즈에 살고 있습니다.",
      ],
    },
    mdAndUp: {
      en: [
        "안녕! I'm Mathieu, a Fullstack Engineer",
        "who loves building all kinds of products",
        "using creative and systematic solutions.",
        "I'm currently fully employed at Dataiku",
        "and live in Toulouse, France.",
      ],
      ko: [
        "Hello! 저는 Mathieu입니다.",
        "창의적이고 체계적인 솔루션을 활용하여 모든 종류의",
        "제품을 만드는 것을 좋아하는 풀스택 개발자입니다.",
        "저는 현재 Dataiku에서 풀타임으로 일하며",
        "프랑스 툴루즈에 살고 있습니다.",
      ],
    },
  };
  const speeds = {
    smOnly: {
      en: 25,
      ko: 37,
    },
    mdAndUp: {
      en: 25,
      ko: 37,
    },
  };
  const extraDelays = {
    smOnly: {
      en: 50,
      ko: 50,
    },
    mdAndUp: {
      en: 50,
      ko: 50,
    },
  };
  const glitchProbabilities = {
    smOnly: {
      en: 20,
      ko: 30,
    },
    mdAndUp: {
      en: 20,
      ko: 30,
    },
  };
  const breakpoint = smOnly ? "smOnly" : "mdAndUp";
  const textOptions = texts[breakpoint][mode].reduce((acc, item, index) => {
    const textLength = texts[breakpoint][mode][index].length;
    const speed = speeds[breakpoint][mode];
    const glitchProbability = glitchProbabilities[breakpoint][mode];

    if (index === 0) {
      acc.push({
        duration: textLength * speed,
        delay: 0,
        glitchProbability,
      });
    } else {
      const previousDuration = acc[index - 1].duration || 0;
      const previousDelay = acc[index - 1].delay || 0;
      const extraDelay = extraDelays[breakpoint][mode];

      acc.push({
        duration: textLength * speed,
        delay: previousDuration + previousDelay + extraDelay,
        glitchProbability,
      });
    }

    return acc;
  }, [] as TextAnimatedOptions[]);

  return (
    <Flex
      {...rest}>
      <Box
        onClick={handleClick}
        sx={{
          cursor: "pointer",
        }}>
        <Fragment
          key={`home-introduction-${mode}`}>
          <Responsive smOnly>
            {texts[breakpoint][mode].map((text, index) => {
              return (
                <TextAnimated
                  key={`text-animated-${index}`}
                  variant={"subheading1"}
                  options={textOptions[index]}
                  sx={{
                    lineHeight: 1.4,
                    color: "on-surface",
                  }}>
                  {text}
                </TextAnimated>
              );
            })}
          </Responsive>
          <Responsive mdAndUp>
            {texts[breakpoint][mode].map((text, index) => {
              return (
                <TextAnimated
                  key={`text-animated-${index}`}
                  variant={[null, "subheading1", "subheading1", "heading6"]}
                  options={textOptions[index]}
                  sx={{
                    lineHeight: 1.4,
                    color: "on-surface",
                  }}>
                  {text}
                </TextAnimated>
              );
            })}
          </Responsive>
        </Fragment>
      </Box>
    </Flex>
  );
};
