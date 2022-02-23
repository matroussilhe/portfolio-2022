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
        flexDirection: "row",
        flexWrap: "wrap",
        p: 5,
      }}>
      <TextAnimated
        text={"Hello, my name is Mathieu and I am curious about many things!"}
        duration={1000}
        delay={0}
      />
    </Flex>
  );
};

export default DebugTextAnimated;
