import React from "react";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";

import {
  LayoutCaseStudy,
} from "@components";
import {
  CaseStudyPageDocument,
  getCaseStudyPageDocument,
  getCaseStudyPageDocuments,
  parseCaseStudyPageDocument,
  parseCaseStudyPageDocumentsIds,
} from "@services";

export type CaseStudyProps = {
  document: CaseStudyPageDocument;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await getCaseStudyPageDocuments();
  const ids = parseCaseStudyPageDocumentsIds(documents);

  // build static paths from prismic document ids
  const paths = ids.map((id) => {
    return `/case-studies/${id}`;
  });

  return {
    paths,
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
  const router = useRouter();
  const { id } = router.query;

  return (
    <LayoutCaseStudy
      key={`case-study-${id}`}
      header={document.header}
      contents={document.contents}
      footer={document.footer}
    />
  );
};

export default CaseStudy;
