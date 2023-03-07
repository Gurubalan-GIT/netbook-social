import classNames from "classnames";
import { FunctionComponent } from "react";
import classes from "./SearchInput.module.scss";
import { Props } from "./types";

const SearchInput: FunctionComponent<Props> = (props) => {
  const { customClass, ...rest } = props;
  return (
    <input
      className={classNames(classes.searchInputContainer, customClass)}
      {...rest}
    />
  );
};

export default SearchInput;
