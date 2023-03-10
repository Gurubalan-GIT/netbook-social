import { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  customClass?: string;
  customWrapperClass?: string;
  debounceTimeout?: number;
}
