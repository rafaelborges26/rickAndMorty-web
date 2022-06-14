import { render, screen } from "@testing-library/react";

import { Checkbox } from ".";

test("should render Checkbox  ", () => {
  render(
    <Checkbox
      name="Teste"
      onSelectCheckbox={() => {}}
      onChange={() => {}}
      value="teste"
    />
  );
});
