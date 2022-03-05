import React, { forwardRef, FunctionComponent } from "react";

import {
  Flex,
  FlexProps,
  Text,
} from "@components";
import {
  SubsectionTitle,
} from "@services";

export type TableOfContentsSubsectionTitleProps = FlexProps & {
  content: SubsectionTitle;
};

export const TableOfContentsSubsectionTitle: FunctionComponent<TableOfContentsSubsectionTitleProps> = forwardRef<HTMLDivElement, TableOfContentsSubsectionTitleProps>(({
  content,
  ...rest
}, ref) => {
  return (
    <Flex
      ref={ref}
      sx={{
        mb: "12px",
        pl: 5,
      }}
      {...rest}>
      <Text
        variant={"body1"}
        sx={{
          lineHeight: 1,
        }}>
        {content.title}
      </Text>
    </Flex>
  );
});
