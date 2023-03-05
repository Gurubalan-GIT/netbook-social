import { ReactNode } from "react";

type ButtonVariants = "primary" | "outlined" | "secondary";

export type Props = {
  children?: ReactNode | null;
  variant?: ButtonVariants;
  className?: string;
};
