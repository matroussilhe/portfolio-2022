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
          duration: 3000,
          delay: 0,
          cursorCount: 10,
        }}>
        {"Hello, my name is Mathieu and I am curious about many things!"}
      </TextAnimated>
    </Flex>
  );
};

export default DebugTextAnimated;
