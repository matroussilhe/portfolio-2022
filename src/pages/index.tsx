import React from "react";

import { GetStaticProps, NextPage } from "next";

import { LayoutIndex } from "@components/templates/layout-index";
import {
  getIndexPageDocument,
  IndexPageDocument,
  parseIndexPageDocument,
} from "@services";

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
  return (
    <LayoutIndex
      works={document.works}
      archives={document.archives}
    />
  );
};

export default Index;
