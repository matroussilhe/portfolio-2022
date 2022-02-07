import React from "react";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import {
  LayoutCaseStudy,
} from "@components";
import {
  CaseStudyPageDocument,
  getCaseStudyPageDocument,
  parseCaseStudyPageDocument,
} from "@services";

export type CaseStudyProps = {
  document: CaseStudyPageDocument;
  // DEBUG:
  rawDocument: any;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: fetch all possible case study ids from prismic and add them to path
  return {
    paths: [
      "/case-studies/qmit",
      "/case-studies/withgoods",
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const document = await getCaseStudyPageDocument(context?.params?.id as string | undefined);
  const parsedDocument = parseCaseStudyPageDocument(document);

  return {
    props: {
      document: parsedDocument,
      // DEBUG:
      rawDocument: document,
    },
  };
};

const CaseStudy: NextPage<CaseStudyProps> = ({ document, rawDocument }) => {
  // DEBUG:
  console.log("document : ", document);
  console.log("raw document : ", rawDocument);

  return (
    <LayoutCaseStudy
      header={document.header}
      footer={document.footer}
    />
  );
};

export default CaseStudy;
