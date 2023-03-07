import classNames from "classnames";
import { Props } from "layouts/RootLayout/types";
import { FunctionComponent } from "react";

const SectionLayout: FunctionComponent<Props> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={classNames(
        "px-[40px] flex items-center justify-center xl:px-[100px] xxl:px-[135px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionLayout;
