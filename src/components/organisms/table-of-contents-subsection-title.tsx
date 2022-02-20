import React, { FunctionComponent } from "react";

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

export const TableOfContentsSubsectionTitle: FunctionComponent<TableOfContentsSubsectionTitleProps> = ({
  content,
  ...rest
}) => {
  return (
    <Flex
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
};
