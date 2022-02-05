import React, { Fragment, FunctionComponent } from "react";

import {
  Flex,
  Navbar,
  Text,
} from "@components";

export type LayoutCaseStudyProps = {
  id: string;
};

export const LayoutCaseStudy: FunctionComponent<LayoutCaseStudyProps> = ({
  id,
}) => {
  return (
    <Fragment>
      <Navbar
        iconColor={"on-surface"}
        workCount={4}
      />
      <Flex
        sx={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text>
          {`${id} case study`}
        </Text>
      </Flex>
    </Fragment>
  );
};
