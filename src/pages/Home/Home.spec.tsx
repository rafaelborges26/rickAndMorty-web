import { render } from "@testing-library/react";

import { Home } from ".";

test("should be able render page  ", () => {
  render(<Home />);

  expect(Home).toBeTruthy();
});
