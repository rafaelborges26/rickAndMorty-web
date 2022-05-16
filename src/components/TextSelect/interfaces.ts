import { ReactNode } from "react"
import { ButtonHTMLAttributes } from 'react';

export interface TextSelectProps extends ButtonHTMLAttributes<HTMLButtonElement>, TextSelectPropsStyle {
    children?: ReactNode;
}

export interface TextSelectPropsStyle {
    active: boolean;
    children?: ReactNode;
    weight: 'bold' | 'normal';
    size: 'S' | 'M' | 'B';
}