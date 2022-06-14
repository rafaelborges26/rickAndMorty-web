import { fireEvent, render, waitFor, act } from "@testing-library/react";
import { screen } from "@testing-library/dom";


import { CardWidth } from ".";
import ImageTeste from '../../assets/RickAndMortyLogo.png'

test("should render CardWidth ", async () => {
  const { container, getByText } = render(
    <CardWidth variations="primary" title="Teste" subTitle="testing one" imageCharacter={ImageTeste} />
  );

  const TextTitle = screen.getByText("Teste");
  
  expect(TextTitle).toBeTruthy();
});

test("should render CardWidth secondary variation ", async () => {
    const { container, getByText } = render(
      <CardWidth variations="secondary" title="Teste" subTitle="testing one" imageCharacter={ImageTeste} numberItem="01" />
    );
  
    const TextTitle = screen.getByText("Teste");
    
    

    await waitFor(() => {
        expect(TextTitle).toBeTruthy();
    })

  });

/*test("should render Card with Dead Character ", async () => {
    const { container, getByText } = render(
      <CardWidth variations="primary" name="Teste" status="Dead" episodes={[]} image={ImageTeste} />
    );
  
    const TextStatus = screen.getByText("Dead");
    
    expect(TextStatus).toBeTruthy();
  });

  test("should render Card with Unknown Character ", async () => {
    const { container, getByText } = render(
      <CardWidth variations="primary" name="Teste" status="Unknown" episodes={[]} image={ImageTeste} />
    );
  
    const TextStatus = screen.getByText("Unknown");
    
    expect(TextStatus).toBeTruthy();
  });
*/