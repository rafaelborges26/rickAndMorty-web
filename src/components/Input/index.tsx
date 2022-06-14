import React, { useCallback, useRef, useState } from "react";

import { InputFieldProps } from "./interface";
import MagnifyingGlass from '../../assets/icons/magnifyingGlass.svg'
import { Component, InputComponent, LabelComponent } from "./styles";

export const Input: React.FC<InputFieldProps> = ({
  className,
  variant = "fill",
  sizes = "medium",
  type = "text",
  id,
  label,
  icon,
  isError,
  helperText,
  disabled,
  value,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isField, setIsField] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  console.log(isField);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!inputRef.current?.value);
  }, []);

  return (
    <Component variant={variant}>
      {type === "text" && <img src={MagnifyingGlass} alt="Lupa de pesquisar" />}
      <InputComponent
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type={type}
        id={id}
        disabled={disabled}
        ref={inputRef}
        variant={variant}
        defaultValue={value}
        {...props}
      />

      {label && (
        <LabelComponent htmlFor={id} focused={isFocused || isField}>
          {label}
        </LabelComponent>
      )}
    </Component>
  );
};
