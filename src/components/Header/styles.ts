import styled from 'styled-components';
import Theme from '../../theme';

export const HeaderContainer = styled.header`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);


    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        height: 70px;
        justify-content: center;
    }
`

export const ContainerLogo = styled.div`
    margin: 14px 0 19px 157px;
    flex: 0.4;

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        display: none;
        flex: 0;
    }
`

export const Options = styled.div`
    display: flex;
    flex: 0.6;
    margin-right: 10vw;

    button {
        & + button {
            margin-left: 105px;
        }
    }

    @media (max-width: ${Theme.breakPoints.ipadPro}) {
        flex: 1;
        justify-content: center;
        margin: 0;
    }

    @media (max-width: ${Theme.breakPoints.mobile}) {
        
        button {
        & + button {
            margin-left: 70px;
        }
    }
    }

    @media (max-width: ${Theme.breakPoints.mediumMobile}) {
        
        button {
        & + button {
            margin-left: 36px;
        }
    }
    }
`