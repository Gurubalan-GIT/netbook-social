import { FunctionComponent } from "react";
import { Props } from "./types";

const Pill: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="rounded-lg bg-blue-200 px-[12px] py-[12px] text-blue-800 text-[12px] font-medium w-fit">
      {children}
    </div>
  );
};

export default Pill;
