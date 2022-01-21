import React from "react";

import { GetStaticProps, NextPage } from "next";

import { LayoutAbout } from "@components";

export type AboutProps = {};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const About: NextPage<AboutProps> = ({}) => {
  return (
    <LayoutAbout/>
  );
};

export default About;
