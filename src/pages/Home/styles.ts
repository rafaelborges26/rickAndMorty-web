import styled from 'styled-components'
import Theme from '../../theme';

export const Container = styled.div``;

export const Content = styled.div`
    display: flex;
    margin-top: 67px;

    

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        flex-direction: column;    
    }

`

export const ContainerInfo = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    //margin-left: 167px;
    align-items: end;

    p {
        & + p {
            margin-bottom: 43px;
        }
    }

    h2 {
        & + h2 {
            margin-bottom: 18px;
        }
    }

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        align-items: center;
        width: 100%
    }
    
`;

export const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: start;
`;

export const Title = styled.h2`
    font-style: normal;
    font-weight: 800;
    font-size: 54px;
    line-height: 76px;

    @media (max-width: ${Theme.breakPoints.notebook}) {
        font-size: 42px;
        line-height: 60px;
    }

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        font-size: 64px;
        line-height: 80px;
    }

    @media (max-width: ${Theme.breakPoints.mobile}) {
        font-size: 42px;
        line-height: 60px;
    }

    @media (max-width: ${Theme.breakPoints.mediumMobile}) {
        font-size: 32px;
        line-height: 40px;
    }

`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 36px;

    letter-spacing: 0.02em;
    color: ${Theme.colors.textDark};

    @media (max-width: ${Theme.breakPoints.notebook}) {
        font-size: 14px;
        line-height: 28px;
    }

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        font-size: 18px;
        line-height: 40px;
    }

    @media (max-width: ${Theme.breakPoints.mobile}) {
        font-size: 16px;
        line-height: 30px;
    }

    @media (max-width: ${Theme.breakPoints.mediumMobile}) {
        font-size: 12px;
        line-height: 22px;
    }
`;

export const ContentImage = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    margin-left: 29px;

    img {
        width: 100%;
    }

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        width: 100%;
        margin-left: 0;
    }
`;