import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  Text,
  TextSocial,
} from "@components";

export type SectionFooterHomeProps = {};

export const SectionFooterHome: FunctionComponent<SectionFooterHomeProps> = () => {
  return (
    <Flex
      sx={{
        width: "100%",
        alignItems: "flex-end",
        pb: 4,
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
        <Text>
          {"14:20 New York City"}
        </Text>
      </Box>
    </Flex>
  );
};
