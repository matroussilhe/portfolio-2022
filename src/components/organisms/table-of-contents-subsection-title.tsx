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
        ml: 5,
        mb: 1,
      }}
      {...rest}>
      <Text
        variant={"body1"}>
        {content.title}
      </Text>
    </Flex>
  );
});
