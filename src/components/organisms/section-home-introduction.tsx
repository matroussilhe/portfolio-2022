import React, { Fragment, FunctionComponent, useState } from "react";

import {
  Box,
  Flex,
  FlexProps,
  Responsive,
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
            <Responsive mdAndDown>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"안녕! I'm Mathieu,"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"a Fullstack Engineer"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"who loves building"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"all kinds of products"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"using creative and"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"systematic solutions."}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"I'm currently fully employed"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"at QMIT and"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"live in Seoul, Korea."}
              </TextAnimated>
            </Responsive>
            <Responsive lgAndUp>
              <TextAnimated
                variant={"heading5"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"안녕! I'm Mathieu, a Fullstack Engineer"}
              </TextAnimated>
              <TextAnimated
                variant={"heading5"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"who loves building all kinds of products"}
              </TextAnimated>
              <TextAnimated
                variant={"heading5"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"using creative and systematic solutions."}
              </TextAnimated>
              <TextAnimated
                variant={"heading5"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"I'm currently fully employed at QMIT"}
              </TextAnimated>
              <TextAnimated
                variant={"heading5"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"and live in Seoul, Korea."}
              </TextAnimated>
            </Responsive>
          </Fragment>
        ) : (
          <Fragment
            key={generateId()}>
            <Responsive mdAndDown>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"Hi! 저는 풀스택 엔지니어"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"Mathieu입니다"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"창의적이고 체계적인"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"솔루션을 사용하여"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"모든 종류의 제품을 만드는"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"것을 좋아하는 사람입니다."}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"저는 현재 QMIT에"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"완전히 고용되어"}
              </TextAnimated>
              <TextAnimated
                variant={"subheading1"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"한국 서울에 살고 있습니다."}
              </TextAnimated>
            </Responsive>
            <Responsive lgAndUp>
              <TextAnimated
                variant={"heading5"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"Hi! 저는 풀스택 엔지니어 Mathieu입니다"}
              </TextAnimated>
              <TextAnimated
                variant={"heading5"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"창의적이고 체계적인 솔루션을 사용하여"}
              </TextAnimated>
              <TextAnimated
                variant={"heading5"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"모든 종류의 제품을 만드는 것을 좋아하는 사람입니다."}
              </TextAnimated>
              <TextAnimated
                variant={"heading5"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"저는 현재 QMIT에 완전히 고용되어"}
              </TextAnimated>
              <TextAnimated
                variant={"heading5"}
                options={{
                  duration: 900,
                  delay: 0,
                }}
                sx={{
                  lineHeight: 1.4,
                  color: "on-surface",
                }}>
                {"한국 서울에 살고 있습니다."}
              </TextAnimated>
            </Responsive>
          </Fragment>
        )}
      </Box>
    </Flex>
  );
};
