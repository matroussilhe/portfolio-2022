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
    },
  };
};

const CaseStudy: NextPage<CaseStudyProps> = ({ document }) => {
  return (
    <LayoutCaseStudy
      header={document.header}
      contents={document.contents}
      footer={document.footer}
    />
  );
};

export default CaseStudy;
