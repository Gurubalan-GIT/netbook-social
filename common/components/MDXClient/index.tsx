"use client";

import { MDXRemote } from "next-mdx-remote";
import { FunctionComponent } from "react";

const MDXClient: FunctionComponent<any> = (props) => {
  const { content } = props;
  return <MDXRemote {...content} />;
};

export default MDXClient;
