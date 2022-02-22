import React, { FunctionComponent } from "react";

import {
  Flex, FlexProps,
} from "@components";

export type SectionPhotoProps = FlexProps & {};

export const SectionPhoto: FunctionComponent<SectionPhotoProps> = ({
  ...rest
}) => {
  return (
    <Flex
      sx={{
        height: "100%",
        backgroundColor: "blue-700",
      }}
      {...rest}
    />
  );
};
