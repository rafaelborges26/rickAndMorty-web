import styled from 'styled-components'
import Theme from '../../theme';

export const Container = styled.div`

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 170px;
    position: relative;

    @media (max-width: ${Theme.breakPoints.notebook}) {
        padding: 0 50px;
    }

    @media (max-width: ${Theme.breakPoints.mobile}) {
        padding: 0 15px;
    }
    

`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 70px 0 30px;
    font-size: 34px;
    line-height: 42px;
    align-items: center;
    letter-spacing: 3px;
    font-weight: 300;

    @media (max-width: ${Theme.breakPoints.notebook}) {
        font-size: 26px;
        line-height: 30px;
    }

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        font-size: 18px;
        line-height: 24px;
    }

`;

export const ContainerSelect = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 40px;
    margin-top: 36px;
`;

export const ContainerCard = styled.div`
    width: 100%;
    margin-top: 54px;
    padding: 0 0 0 30px;

    display: flex;
    flex-flow: wrap;
    justify-content: start;

    @media (max-width: ${Theme.breakPoints.ipad}) {
        padding: 0;
        justify-content: center;
    }
`;

export const Card = styled.div`
    margin: 18px 11px 18px 0;
    width: 160px;
    height: 110px;
    background: red;

    padding: 10px;
`;
