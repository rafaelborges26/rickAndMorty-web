import { ButtonPros } from "./interfaces";
import { ButtonContainer } from "./styles";

export function Button({ children, size, ...rest }: ButtonPros) {
  return (
    <ButtonContainer {...rest} size={size}>
      {children}
    </ButtonContainer>
  );
}
