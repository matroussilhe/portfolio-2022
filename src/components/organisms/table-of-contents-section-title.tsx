import React, { forwardRef, FunctionComponent } from "react";

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

export const TableOfContentsSectionTitle: FunctionComponent<TableOfContentsSectionTitleProps> = forwardRef<HTMLDivElement, TableOfContentsSectionTitleProps>(({
  content,
  index,
  isActive,
  onClick,
  ...rest
}, ref) => {
  const indexString = (index + 1).toString().padStart(2, "0");

  const activeSx = {
    textDecoration: isActive ? "underline" : "none",
    textDecorationThickness: "1px",
    textUnderlineOffset: "4px",
  };

  return (
    <Flex
      ref={ref}
      sx={{
        mb: 1,
        zIndex: 1,
        alignItems: "center",
      }}
      {...rest}>
      <Text
        variant={"body1"}
        onClick={onClick}
        sx={{
          cursor: "pointer",
          ...(isActive ? activeSx : {}),
        }}>
        <span sx={{ fontWeight: "bold" }}>{indexString}</span>&nbsp;{"-"}&nbsp;{content.title}
      </Text>
    </Flex>
  );
});
