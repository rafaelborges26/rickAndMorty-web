import { ReactNode, SelectHTMLAttributes } from "react";

export type ISelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  multiselect: boolean;
}