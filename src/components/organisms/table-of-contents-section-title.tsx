import React, { FunctionComponent } from "react";

import {
  Flex,
  Text,
} from "@components";
import {
  SectionTitle,
} from "@services";

export type TableOfContentsSectionTitleProps = {
  content: SectionTitle;
  index: number;
  isActive: boolean;
};

export const TableOfContentsSectionTitle: FunctionComponent<TableOfContentsSectionTitleProps> = ({
  content,
  index,
  isActive,
}) => {
  const indexString = (index + 1).toString().padStart(2, "0");

  const activeSx = {
    textDecoration: isActive ? "underline" : "none",
    textDecorationThickness: "1px",
    textUnderlineOffset: "4px",
  };

  return (
    <Flex
      sx={{
        mb: 1,
        alignItems: "center",
      }}>
      <Text
        variant={"body1"}
        sx={{
          ...(isActive ? activeSx : {}),
        }}>
        <span sx={{ fontWeight: "bold" }}>{indexString}</span>&nbsp;{"-"}&nbsp;{content.title}
      </Text>
    </Flex>
  );
};
