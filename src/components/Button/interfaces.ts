import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonPros extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    size?: 'S' | 'M' | 'B'
}