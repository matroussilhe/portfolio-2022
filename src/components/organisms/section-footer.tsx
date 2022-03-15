import React, { FunctionComponent } from "react";

import {
  Flex,
  FlexProps,
  Link,
  Text,
} from "@components";
import {
  Footer,
} from "@services";

export type SectionFooterProps = FlexProps & {
  footer: Footer;
};

export const SectionFooter: FunctionComponent<SectionFooterProps> = ({
  footer,
  ...rest
}) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "background",
      }}
      {...rest}>
      <Text
        variant={["body2", "body1", "heading5", "heading5"]}
        sx={{
          ml: [12, 16, "300px", "300px"],
          mb: ["12px", "20px", 6, 6],
          lineHeight: 1,
          fontSize: [null, null, null, "3rem"],
        }}>
        {"NEXT CASE STUDY"}
      </Text>
      <Link
        href={footer.link}>
        <Text
          variant={["heading4", "heading3", "heading1", "heading1"]}
          sx={{
            ml: [3, 4, 5, 5],
            mb: ["16px", "28px", 8, 8],
            fontWeight: "bold",
          }}>
          {footer.title}
        </Text>
      </Link>
      <Text
        variant={["label3", "label2", "subheading1", "subheading1"]}
        sx={{
          ml: [4, 5, 8, 8],
          fontSize: [null, null, null, "1.5rem"],
          fontFamily: "heading",
        }}>
        {footer.subtitle.toUpperCase()}
      </Text>
    </Flex>
  );
};
