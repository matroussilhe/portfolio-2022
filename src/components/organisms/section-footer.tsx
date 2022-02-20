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
        variant={"heading4"}
        sx={{
          ml: "300px",
          mb: 6,
          fontSize: "3rem",
        }}>
        {"NEXT CASE STUDY"}
      </Text>
      <Link
        href={footer.link}>
        <Text
          variant={"heading1"}
          sx={{
            fontWeight: "bold",
            ml: 5,
            mb: 8,
          }}>
          {footer.title}
        </Text>
      </Link>
      <Text
        variant={"subheading1"}
        sx={{
          ml: 8,
          fontSize: "1.5rem",
        }}>
        {footer.subtitle.toUpperCase()}
      </Text>
    </Flex>
  );
};
