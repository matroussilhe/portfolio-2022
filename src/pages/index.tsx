import React from "react";

import { GetStaticProps, NextPage } from "next";

import { LayoutIndex } from "@components/templates/layout-index";
import {
  getIndexPageDocument,
  IndexPageDocument,
  parseIndexPageDocument,
} from "@utils";

export type IndexProps = {
  document: IndexPageDocument;
  // DEBUG:
  rawDocument: any;
};

export const getStaticProps: GetStaticProps = async () => {
  const document = await getIndexPageDocument();
  const parsedDocument = parseIndexPageDocument(document);

  return {
    props: {
      document: parsedDocument,
      // DEBUG:
      rawDocument: document,
    },
  };
};

const Index: NextPage<IndexProps> = ({ document, rawDocument }) => {
  // DEBUG:
  console.log("document : ", document);
  console.log("raw document : ", rawDocument);

  return (
    <LayoutIndex
      works={document.works}
      archives={document.archives}
    />
  );
};

export default Index;
