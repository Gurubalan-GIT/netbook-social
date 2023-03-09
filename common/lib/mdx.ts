import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

export async function mdxToHtml(source: any) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      format: "mdx",
    },
  });

  return {
    html: mdxSource,
  };
}
