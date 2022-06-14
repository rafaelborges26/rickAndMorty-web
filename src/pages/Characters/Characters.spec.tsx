import { render } from "@testing-library/react";

import { Characters } from ".";

test("should be able render page characters", () => {
  render(<Characters />);

  expect(Characters).toBeInTheDocument();
});
