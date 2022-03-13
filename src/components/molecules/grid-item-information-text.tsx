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
          variant={["body1", "body1", "body1", "subheading1"]}
          sx={{
            mb: ["12px", "12px", "12px", 2],
          }}>
          {item.text}
        </Text>
      ))}
    </Flex>
  );
};
