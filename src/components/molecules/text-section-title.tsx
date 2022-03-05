import React, { Fragment, FunctionComponent } from "react";

import {
  Flex,
  Responsive,
  Text,
} from "@components";

export type TextSectionTitleProps = {
  title: string;
  subtitle: string;
};

export const TextSectionTitle: FunctionComponent<TextSectionTitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Fragment>
      <Responsive smOnly>
        <Flex
          sx={{
            flexDirection: "column",
          }}>
          <Text
            variant={"heading4"}
            sx={{
              fontWeight: "bold",
            }}>
            {title}
          </Text>
          <Text
            variant={"label3"}
            sx={{
              mt: "4px",
            }}>
            {subtitle}
          </Text>
        </Flex>
      </Responsive>
      <Responsive mdAndUp>
        <Flex
          sx={{
            alignItems: "flex-start",
          }}>
          <Text
            variant={["heading4", "heading4", "heading3", "heading3"]}
            sx={{
              mr: 1,
              fontWeight: "bold",
            }}>
            {title}
          </Text>
          <Text
            variant={["label3", "label3", "label1", "label1"]}>
            {subtitle}
          </Text>
        </Flex>
      </Responsive>
    </Fragment>
  );
};
