import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  Text,
} from "@components";

export type SectionHomeProps = {};

export const SectionHome: FunctionComponent<SectionHomeProps> = () => {
  const title = "어이 Hello, I'm Mathieu a full stack developer building something special and mostly foucs on these technologies. I'm currently fully employed at QMIT Inc. | 저는 웹 개발자입니다. and live in SEOUL KOREA.";

  return (
    <Flex
      sx={{
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#F2F2F2", // TODO: add color to theme (color/on-color pair)
      }}>
      <Flex
        sx={{
          height: "100px",
        }}
      />
      <Flex
        sx={{
          flex: "1 0 auto",
          alignItems: "center",
        }}>
        <Box
          sx={{
            px: [8],
          }}>
          <Text
            variant={"heading3"}>
            {title}
          </Text>
        </Box>
      </Flex>
      <Flex
        sx={{
          height: "100px",
          alignItems: "flex-end",
        }}>
        <Box
          sx={{
            flex: "1 0 auto",
          }}>
          <Flex
            sx={{
              flexDirection: "column",
            }}>
            <Flex
              sx={{
                flex: "1 0 auto",
                alignItems: "baseline",
              }}>
              <Text
                variant={"label3"}
                sx={{
                  width: "64px",
                }}>
                {"EMAIL"}
              </Text>
              <Text>
                {"Mathieu.roussilhe@gmail.com"}
              </Text>
            </Flex>
            <Flex
              sx={{
                flex: "1 0 auto",
                alignItems: "baseline",
              }}>
              <Text
                variant={"label3"}
                sx={{
                  width: "64px",
                }}>
                {"SOCIAL"}
              </Text>
              <Text>
                {"Linkedin, Instagram"}
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box
          sx={{
            flex: "0 1 auto",
          }}>
          <Text>
            {"14:20 New York City"}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
