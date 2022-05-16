import { ReactNode } from "react";

export interface ItemsProps {
    name: string;
    url: string
}

export interface SelectProps {
    items?: ItemsProps[];
    active?: boolean
    title?: string
}