import React from "react";

import {
  getIndexPageDocument,
  IndexPageDocument,
  parseIndexPageDocument,
} from "@utils";
import { GetStaticProps, NextPage } from "next";

import { LayoutIndex } from "@components/templates/layout-index";

export type IndexProps = {
  document: IndexPageDocument;
};

export const getStaticProps: GetStaticProps = async () => {
  const document = await getIndexPageDocument();
  const parsedDocument = parseIndexPageDocument(document);

  return {
    props: {
      document: parsedDocument,
    },
  };
};

const Index: NextPage<IndexProps> = ({ document }) => {
  // DEBUG:
  console.log("document : ", document);

  return (
    <LayoutIndex
      archives={document.archives}
    />
  );
};

export default Index;
