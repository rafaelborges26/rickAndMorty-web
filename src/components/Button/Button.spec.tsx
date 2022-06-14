import { render, screen } from "@testing-library/react";

import { Button } from ".";

test("should render button  ", () => {
  render(<Button size="M" />);
});

test("should render button with size big", () => {
  const { container } = render(<Button size="B">Teste</Button>);

  expect(container).toBeTruthy();
});

test("should render button with size small", () => {
  render(<Button size="S" />);
});
