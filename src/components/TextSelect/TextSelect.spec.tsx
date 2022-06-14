import { render, screen } from "@testing-library/react";

import { TextSelect } from ".";

test("should render textSelect  ", () => {
  render(<TextSelect active size="M" weight="bold" />);
});
