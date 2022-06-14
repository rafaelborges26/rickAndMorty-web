import { render } from "@testing-library/react";

import { Episodes } from ".";

test("should be able render page episodes  ", () => {
  const { getByText } = render(<Episodes />);

  expect(Episodes).toBeInTheDocument();
});
