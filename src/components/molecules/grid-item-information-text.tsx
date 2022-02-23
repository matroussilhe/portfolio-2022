import React, { FunctionComponent } from "react";

import {
  Flex,
  Text,
} from "@components";
import {
  InterestItem,
  SkillItem,
} from "@services";

export type GridItemInformationTextProps = {
  items: SkillItem[] | InterestItem[];
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
          variant={"subheading1"}
          sx={{
            mb: 2,
          }}>
          {item.text}
        </Text>
      ))}
    </Flex>
  );
};
