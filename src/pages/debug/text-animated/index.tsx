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
        text={"Hello, my name is Mathieu and I am curious about many things!"}
        options={{
          duration: 3000,
          delay: 0,
          cursorCount: 10,
        }}
      />
    </Flex>
  );
};

export default DebugTextAnimated;
