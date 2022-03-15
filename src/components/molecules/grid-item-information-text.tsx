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
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <Text
            key={`grid-item-information-text-${index}`}
            variant={["body1", "body1", "body1", "subheading1"]}
            sx={{
              mb: isLast ? 0 : ["12px", "12px", "12px", 2],
            }}>
            {item.text}
          </Text>
        );
      })}
    </Flex>
  );
};
