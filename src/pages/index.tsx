import React from "react";

import {
  client,
  helper,
  Test,
} from "@utils";
import { GetStaticProps, NextPage } from "next";

import {
  Box,
  Button,
  Flex,
  Tag,
  Text,
} from "@components";
import { LayoutIndex } from "@components/templates/layout-index";

export type IndexProps = {
  tests: Test;
};

export const getStaticProps: GetStaticProps = async () => {
  // const tests = await getTests();
  try {
    const document = await client().getByUID("index", "index");
    console.log("document: ", document);

    console.log("raw: ", document.data.body[0].primary.description);
    console.log("helper: ", helper.asText(document.data.body[0].primary.description));

    return {
      props: {
        document,
      },
    };
  } catch (error) {
    console.error(error);

    return { props: {}};
  }
};

const Index: NextPage<IndexProps> = (props) => {
  // DEBUG:
  console.log("props: ", props);

  return (
    <LayoutIndex
      archives={[{ title: "title test", description: "description test" }]}
    />
  );
};

export default Index;
