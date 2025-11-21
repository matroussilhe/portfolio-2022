import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  FlexProps,
  IconClock,
  Responsive,
  TextContact,
} from "@components";

export type SectionContactProps = FlexProps & {};

export const SectionContact: FunctionComponent<SectionContactProps> = ({
  ...rest
}) => {
  return (
    <Flex
      sx={{
        width: "100%",
        alignItems: "flex-end",
        backgroundColor: "surface",
      }}
      {...rest}>
      <Box
        sx={{
          flex: "1 0 auto",
        }}>
        <Flex
          sx={{
            flexDirection: "column",
          }}>
          <Box
            sx={{
              mb: [1, 1, 1, 1],
            }}>
            <TextContact
              label={"EMAIL"}
              links={[
                {
                  href: "mailto:mathieu.roussilhe@gmail.com",
                  text: "mathieu.roussilhe@gmail.com",
                },
              ]}
            />
          </Box>
          <Box>
            <TextContact
              label={"SOCIAL"}
              links={[
                {
                  href: "https://www.linkedin.com/in/matroussilhe",
                  text: "LinkedIn",
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
      <Responsive lgAndUp>
        <Box
          sx={{
            flex: "0 1 auto",
          }}>
          <IconClock/>
        </Box>
      </Responsive>
    </Flex>
  );
};
