import { fireEvent, render, waitFor, act } from "@testing-library/react";
import { screen } from "@testing-library/dom";


import { Card } from ".";
import ImageTeste from '../../assets/RickAndMortyLogo.png'

test("should render Card ", async () => {
  const { container, getByText } = render(
    <Card variations="primary" name="Teste" status="Alive" episodes={[]} image={ImageTeste} />
  );

  const TextTitle = screen.getByText("Teste");
  
  expect(TextTitle).toBeTruthy();
});

test("should render Card with Dead Character ", async () => {
    const { container, getByText } = render(
      <Card variations="primary" name="Teste" status="Dead" episodes={[]} image={ImageTeste} />
    );
  
    const TextStatus = screen.getByText("Dead");
    
    expect(TextStatus).toBeTruthy();
  });

  test("should render Card with Unknown Character ", async () => {
    const { container, getByText } = render(
      <Card variations="primary" name="Teste" status="Unknown" episodes={[]} image={ImageTeste} />
    );
  
    const TextStatus = screen.getByText("Unknown");
    
    expect(TextStatus).toBeTruthy();
  });
