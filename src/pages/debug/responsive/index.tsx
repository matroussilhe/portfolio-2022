import React from "react";

import {
  Box,
  Flex,
  Responsive,
  Text,
} from "@components";

const DebugResponsive = () => {
  return (
    <Flex
      sx={{
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
      <Box
        sx={{
          width: ["100%", "75%", "50%", "25%"],
          mt: ["12px", "100px"],
          backgroundColor: "#264653",
        }}>
        <Text
          variant={["body2", "body1", "heading2", "heading1"]}
          sx={{
            color: "#FFFFFF",
          }}>
            Hello there!
        </Text>
      </Box>
      <Responsive mdAndDown>
        <Box
          sx={{
            width: ["100%", "75%", "50%", "25%"],
            backgroundColor: "#2A9D8F",
          }}/>
      </Responsive>
      <Box
        sx={{
          width: ["100%", "75%", "50%", "25%"],
          backgroundColor: "#E9C46A",
        }}/>
      <Box
        sx={{
          width: ["100%", "75%", "50%", "25%"],
          backgroundColor: "#F4A261",
        }}/>
    </Flex>
  );
};

export default DebugResponsive;
