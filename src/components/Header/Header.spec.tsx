import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import { Header } from ".";

test("should render header", () => {
  const { container } = render(<Header />);

  expect(container).toBeTruthy();
});

test("should render button header", async () => {
  const { container, getByText } = render(<Header />);

  const buttonCharacter = getByText("Personagens");
  const buttonPlace = getByText("Lugares Famosos");
  const buttonEpisode = getByText("Episódios");

  await waitFor(() => {
    act(() => {
      fireEvent.click(buttonCharacter);
      fireEvent.click(buttonPlace);
      fireEvent.click(buttonEpisode);
    });
  });

  expect(buttonCharacter).toBeCalled();
});
