import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
}

export interface CardPropsStyles {
    backgroundCard: string;
}

export interface TypesProps {
    type: {
        name: string;
    }
}