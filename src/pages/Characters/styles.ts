import styled from 'styled-components'
import Theme from "../../theme";

export const Container = styled.div`
    //width: 100%;
    position: relative;
    height: 100vh;

`;

export const Title = styled.h5`

font-weight: ${Theme.font.weight.bold};
font-size: ${Theme.sizes.heading04};
line-height: ${Theme.sizes.heading02};
text-align: center;
color: ${Theme.colors.blue};
margin-top: 74px;

`;

export const Content = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: ${Theme.spacings.space21};
    width: 100%;
    padding: 0 ${Theme.spacings.space34}; 

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        padding: 0 ${Theme.spacings.space31};     
    }


    @media (max-width: ${Theme.breakPoints.ipad}) {
        padding: 0 ${Theme.spacings.space31};     
    }

    @media (max-width: ${Theme.breakPoints.mobile}) {
        padding: 0 ${Theme.spacings.space23};     
    }


`;

export const ContentSelect = styled.div`
    max-width: 62.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    column-gap: 22px;
    margin-top: 38px;

    @media (max-width: ${Theme.breakPoints.mobile}) {
        flex-direction: column;   
    }

`;

export const ContainerImg = styled.button`
    background: transparent;
    border: none;
    margin-top: 160px;
    cursor: pointer;
    
    @media (max-width: ${Theme.breakPoints.mobile}) {
    
    margin-top: 60px;
}
    
`;

export const Image = styled.img`
    width: 340px;

@media (max-width: ${Theme.breakPoints.mobile}) {
    width: 311px;
}
`

export const Text = styled.span`
  margin-top: ${Theme.spacings.space02};
  color: ${Theme.colors.textBlack};
`;

