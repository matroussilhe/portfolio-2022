import React, { FunctionComponent } from "react";

import {
  Flex,
  FlexProps,
  Text,
} from "@components";
import {
  SectionTitle,
} from "@services";

export type TableOfContentsSectionTitleProps = FlexProps & {
  content: SectionTitle;
  index: number;
  isActive: boolean;
  onClick: () => void;
};

export const TableOfContentsSectionTitle: FunctionComponent<TableOfContentsSectionTitleProps> = ({
  content,
  index,
  isActive,
  onClick,
  ...rest
}) => {
  const indexString = (index + 1).toString().padStart(2, "0");

  const activeSx = {
    textDecoration: isActive ? "underline" : "none",
    textDecorationThickness: "1px",
    textUnderlineOffset: "4px",
  };

  return (
    <Flex
      onClick={onClick}
      sx={{
        mb: 1,
        alignItems: "center",
        cursor: "pointer",
      }}
      {...rest}>
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
