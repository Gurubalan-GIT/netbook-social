import classNames from "classnames";
import { FunctionComponent } from "react";
import classes from "./Button.module.scss";
import { Props } from "./types";

const Button: FunctionComponent<Props> = (props) => {
  const { children, className = "", variant, ...rest } = props;

  const getVariantClass = () => {
    switch (variant) {
      case "outlined":
        return classes.btnOutlined;
      case "secondary":
        return classes.btnSecondary;
      case "primary":
        return classes.btnPrimary;
      case "icon":
        return classes.btnIcon;
      default:
        return "";
    }
  };

  return (
    <button
      {...rest}
      className={classNames(getVariantClass(), classes.btnBase, className)}
    >
      {children}
    </button>
  );
};

export default Button;
