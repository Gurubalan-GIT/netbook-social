import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariants = "primary" | "outlined" | "secondary" | "icon";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | null;
  variant?: ButtonVariants;
  className?: string;
}
