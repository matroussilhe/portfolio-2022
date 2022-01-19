import React from "react";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

import {
  Flex,
  Text,
} from "@components";

export type CaseStudyProps = {};

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: fetch all possible case study ids from prismic and add them to path
  return {
    paths: [
      "/case-study/qmit",
      "/case-study/withgoods",
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const CaseStudy: NextPage<CaseStudyProps> = ({}) => {
  const router = useRouter();

  const { id } = router.query;

  return (
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
  );
};

export default CaseStudy;
