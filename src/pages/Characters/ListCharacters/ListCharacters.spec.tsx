import { render, screen } from "@testing-library/react";

import { ListCharacters } from ".";

test("should be able render List Characteres", () => {
  render(<ListCharacters activeList={true} setActiveList={jest.fn()} />);

  expect(ListCharacters).toBeInTheDocument()
});

test("should be able hide List Characteres ", () => {
    render(<ListCharacters activeList={false} setActiveList={jest.fn()} />);
  
    expect(ListCharacters).toBeInTheDocument()

  });
