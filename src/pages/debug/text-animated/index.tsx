import React from "react";

import {
  Flex,
  TextAnimated,
} from "@components";

const DebugTextAnimated = () => {
  return (
    <Flex
      sx={{
        height: "100%",
        p: 5,
      }}>
      <TextAnimated
        options={{
          duration: 10000,
          delay: 0,
          cursorCount: 1,
        }}>
        {"XXXXXXXXXXXXXXXXXXXX"}
      </TextAnimated>
    </Flex>
  );
};

export default DebugTextAnimated;
