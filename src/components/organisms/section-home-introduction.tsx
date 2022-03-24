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
} from "@components";
import {
  usePreferenceContext,
} from "@hooks";

export type SectionIntroductionModee = "en" | "ko";

export type SectionHomeIntroductionProps = FlexProps & {};

export const SectionHomeIntroduction: FunctionComponent<SectionHomeIntroductionProps> = ({
  ...rest
}) => {
  const {
    introductionMode: mode,
    setIntroductionMode: setMode,
  } = usePreferenceContext();

  // toggle mode on click
  const handleClick = () => {
    const newMode = mode === "en" ? "ko" : "en";

    setMode(newMode);
  };

  // get smOnly texts and options
  const smOnlyTexts = {
    en: [
      "안녕! I'm Mathieu,",
      "a Fullstack Engineer",
      "who loves building",
      "all kinds of products",
      "using creative and",
      "systematic solutions.",
      "I'm currently fully employed",
      "at QMIT and",
      "live in Seoul, Korea.",
    ],
    ko: [
      "Hello! 저는 Mathieu입니다.",
      "창의적이고 체계적인",
      "솔루션을 활용하여",
      "모든 종류의 제품을",
      "만드는 것을 좋아하는",
      "풀스택 개발자입니다.",
      "저는 현재 QMIT에서",
      "풀타임으로 일하며",
      "대한민국 서울에 살고 있습니다.",
    ],
  };
  const smOnlySpeeds = {
    en: 25,
    ko: 40,
  };
  const smOnlyExtraDelay = {
    en: 50,
    ko: 50,
  };
  const smOnlyOptions = smOnlyTexts[mode].reduce((acc, item, index) => {
    if (index === 0) {
      acc.push({
        duration: smOnlyTexts[mode][index].length * smOnlySpeeds[mode],
        delay: 0,
      });
    } else {
      acc.push({
        duration: smOnlyTexts[mode][index].length * smOnlySpeeds[mode],
        delay: acc[index - 1].duration + acc[index - 1].delay + smOnlyExtraDelay[mode],
      });
    }

    return acc;
  }, [] as { duration: number; delay: number }[]);

  // get mdAndUp texts and options
  const mdAndUpTexts = {
    en: [
      "안녕! I'm Mathieu, a Fullstack Engineer",
      "who loves building all kinds of products",
      "using creative and systematic solutions.",
      "I'm currently fully employed at QMIT",
      "and live in Seoul, Korea.",
    ],
    ko: [
      "Hello! 저는 Mathieu입니다.",
      "창의적이고 체계적인 솔루션을 활용하여 모든 종류의",
      "제품을 만드는 것을 좋아하는 풀스택 개발자입니다.",
      "저는 현재 QMIT에서 풀타임으로 일하며",
      "대한민국 서울에 살고 있습니다.",
    ],
  };
  const mdAndUpSpeeds = {
    en: 25,
    ko: 40,
  };
  const mdAndUpExtraDelay = {
    en: 50,
    ko: 50,
  };
  const mdAndUpOptions = mdAndUpTexts[mode].reduce((acc, item, index) => {
    if (index === 0) {
      acc.push({
        duration: mdAndUpTexts[mode][index].length * mdAndUpSpeeds[mode],
        delay: 0,
      });
    } else {
      acc.push({
        duration: mdAndUpTexts[mode][index].length * mdAndUpSpeeds[mode],
        delay: acc[index - 1].duration + acc[index - 1].delay + mdAndUpExtraDelay[mode],
      });
    }

    return acc;
  }, [] as { duration: number; delay: number }[]);

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
            {smOnlyTexts[mode].map((smOnlyText, index) => {
              return (
                <TextAnimated
                  key={`text-animated-${index}`}
                  variant={"subheading1"}
                  options={smOnlyOptions[index]}
                  sx={{
                    lineHeight: 1.4,
                    color: "on-surface",
                  }}>
                  {smOnlyText}
                </TextAnimated>
              );
            })}
          </Responsive>
          <Responsive mdAndUp>
            {mdAndUpTexts[mode].map((mdAndUpText, index) => {
              return (
                <TextAnimated
                  key={`text-animated-${index}`}
                  variant={[null, "subheading1", "subheading1", "heading6"]}
                  options={mdAndUpOptions[index]}
                  sx={{
                    lineHeight: 1.4,
                    color: "on-surface",
                  }}>
                  {mdAndUpText}
                </TextAnimated>
              );
            })}
          </Responsive>
        </Fragment>
      </Box>
    </Flex>
  );
};
