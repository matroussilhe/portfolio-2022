import React, { FunctionComponent } from "react";

import {
  Flex,
  Text,
} from "@components";
import { Interest, Skill } from "@services";

export type GridItemInformationTextProps = {
  items: Skill | Interest;
};

export const GridItemInformationText: FunctionComponent<GridItemInformationTextProps> = ({
  items,
}) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}>
      {items.map((item, index) => (
        <Text
          key={`grid-item-information-text-${index}`}
          variant={"heading5"}
          sx={{
            mb: 1,
          }}>
          {item.text}
        </Text>
      ))}
    </Flex>
  );
};
