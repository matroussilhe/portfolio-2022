import React from "react";

import { Box } from "@components/box";
import { Flex } from "@components/flex";
import { Responsive } from "@components/responsive";
import { Text } from "@components/text";

const DebugResponsive = () => {
  return (
    <Flex
      sx={{
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
      <Box
        bg={"#264653"}
        sx={{
          mt: ["12px", "100px"],
          width: ["100%", "75%", "50%", "25%"],
        }}>
        <Text
          variant={["body2", "body1", "heading2", "heading1"]}
          sx={{
            color: "#ffffff",
          }}>
            Hello there!
        </Text>
      </Box>
      <Responsive mdAndDown>
        <Box
          bg={"#2a9d8f"}
          sx={{
            width: ["100%", "75%", "50%", "25%"],
          }}/>
      </Responsive>
      <Box
        bg={"#e9c46a"}
        sx={{
          width: ["100%", "75%", "50%", "25%"],
        }}/>
      <Box
        bg={"#f4a261"}
        sx={{
          width: ["100%", "75%", "50%", "25%"],
        }}/>
    </Flex>
  );
};

export default DebugResponsive;
