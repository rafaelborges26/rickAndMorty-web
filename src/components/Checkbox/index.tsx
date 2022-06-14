import { useState } from "react";

import { CheckboxProps } from "./interface";
import { CheckboxContainer } from "./styles";

export function Checkbox({
  name,
  value,
  onSelectCheckbox,
  ...rest
}: CheckboxProps) {

  return (
    <CheckboxContainer>
      <input
        {...rest}
        type="checkbox"
        onChange={() => {}}
        checked={false}
        value={value}
      />
      <span>{name}</span>
    </CheckboxContainer>
  );
}
