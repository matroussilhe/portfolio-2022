import React, { forwardRef, FunctionComponent } from "react";

import {
  Flex,
  FlexProps,
  Space,
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
        mb: "12px",
        zIndex: 1,
        alignItems: "center",
      }}
      {...rest}>
      <Text
        variant={["body2", "body2", "body2", "body1"]}
        onClick={onClick}
        sx={{
          cursor: "pointer",
          lineHeight: 1,
          ...(isActive ? activeSx : {}),
        }}>
        <span sx={{ fontWeight: "bold" }}>{indexString}</span><Space/>{"-"}<Space/>{content.title}
      </Text>
    </Flex>
  );
});
