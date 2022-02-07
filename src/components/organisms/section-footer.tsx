import React, { FunctionComponent } from "react";

import { Link } from "theme-ui";

import {
  Flex,
  Text,
} from "@components";
import {
  Footer,
} from "@services";

export type SectionFooterProps = {
  footer: Footer;
};

export const SectionFooter: FunctionComponent<SectionFooterProps> = ({
  footer,
}) => {
  return (
    <Flex
      sx={{
        pt: 25,
        pb: 25,
        flexDirection: "column",
        backgroundColor: "background",
      }}>
      <Text
        variant={"heading3"}
        sx={{
          ml: "300px",
          mb: 6,
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
        variant={"heading5"} sx={{
          ml: 8,
        }}>
        {footer.subtitle.toUpperCase()}
      </Text>
    </Flex>
  );
};
