import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  IconClock,
  TextSocial,
} from "@components";

export type SectionHomeFooterProps = {};

export const SectionHomeFooter: FunctionComponent<SectionHomeFooterProps> = () => {
  return (
    <Flex
      sx={{
        width: "100%",
        alignItems: "flex-end",
        pb: 3,
        px: 6,
      }}>
      <Box
        sx={{
          flex: "1 0 auto",
        }}>
        <Flex
          sx={{
            flexDirection: "column",
          }}>
          <Box sx={{
            mb: 1,
          }}>
            <TextSocial
              label={"EMAIL"}
              links={[
                {
                  href: "mailto:mathieu.roussilhe@gmail.com",
                  text: "Mathieu.roussilhe@gmail.com",
                },
              ]}
            />
          </Box>
          <Box>
            <TextSocial
              label={"SOCIAL"}
              links={[
                {
                  href: "https://www.linkedin.com/in/matroussilhe",
                  text: "Linkedin",
                },
                {
                  href: "https://www.instagram.com/matroussilhe",
                  text: "Instagram",
                },
              ]}
            />
          </Box>
        </Flex>
      </Box>
      <Box
        sx={{
          flex: "0 1 auto",
        }}>
        <IconClock/>
      </Box>
    </Flex>
  );
};
