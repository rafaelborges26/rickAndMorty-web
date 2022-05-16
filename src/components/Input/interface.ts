import { ElementType } from 'react';

export interface InputFieldProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   variant?: 'outline' | 'fill';
   sizes?: 'small' | 'medium' | 'large';
   type: 'text' | 'number' | 'tel' | 'email' | 'password' | 'search';
   id: string;
   label?: string;
   value?: string | number;
   isError?: boolean;
   helperText?: string;
   disabled?: boolean;
   icon?: ElementType;
   key?: React.Key;
}