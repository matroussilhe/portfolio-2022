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
        text={"Hi guys, my name is Mathieu and I am from France"}
        delay={0}
      />
    </Flex>
  );
};

export default DebugTextAnimated;
