import React, { FunctionComponent } from "react";

import {
  Flex,
  SectionHomeFooter,
  SectionHomeIntroduction,
} from "@components";

export type SectionHomeProps = {};

export const SectionHome: FunctionComponent<SectionHomeProps> = () => {
  return (
    <Flex
      sx={{
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "surface",
      }}>
      <Flex
        sx={{
          height: "100px",
        }}
      />
      <Flex
        sx={{
          flex: "1 0 auto",
        }}>
        <SectionHomeIntroduction/>
      </Flex>
      <Flex
        sx={{
          height: "100px",
        }}>
        <SectionHomeFooter/>
      </Flex>
    </Flex>
  );
};
