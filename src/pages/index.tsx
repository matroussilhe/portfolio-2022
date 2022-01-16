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
import { IndexLayout } from "@components/templates/index-layout";

export type IndexProps = {
  tests: Test;
};

export const getStaticProps: GetStaticProps = async () => {
  // const tests = await getTests();
  try {
    const document = await client().getByUID("index", "index");
    console.log("document: ", document);

    console.log("data.body[0].primary.description: ", document.data.body[0].primary.description);
    console.log("prismicH: ", helper.asText(document.data.body[0].primary.description));

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

  // DEBUG: placeholders
  const homeTitle = "어이 Hello, I'm Mathieu a full stack developer building something special and mostly foucs on these technologies. I'm currently fully employed at QMIT Inc. | 저는 웹 개발자입니다. and live in SEOUL KOREA.";
  const workTitle = "Selected work";
  const archiveTitle = "Archive";
  const footerTitle = "FOOTER";

  return (
    <IndexLayout
      homeTitle={homeTitle}
      workTitle={workTitle}
      archiveTitle={archiveTitle}
      footerTitle={footerTitle}
    />
  );
};

export default Index;
