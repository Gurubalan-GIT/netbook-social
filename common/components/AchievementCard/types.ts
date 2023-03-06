import { ReactNode } from "react";
import { Url } from "url";

export type Props = {
  title?: string | ReactNode;
  titleIcon?: ReactNode;
  subTitle?: string | ReactNode;
  subTitleIcon?: ReactNode;
  description?: string;
  outLinkLabel?: string;
  outLink?: Url | string;
};
