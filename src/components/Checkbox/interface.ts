import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    value: string;
    onSelectCheckbox: (name: string) => void
}