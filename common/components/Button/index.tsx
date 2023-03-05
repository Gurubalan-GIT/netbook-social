import classNames from "classnames";
import { FunctionComponent } from "react";
import { Props } from "./types";

const Button: FunctionComponent<Props> = (props) => {
  const { children, className = "", variant } = props;

  return (
    <button className={classNames("btn-" + variant, className)}>
      {children}
    </button>
  );
};

export default Button;
