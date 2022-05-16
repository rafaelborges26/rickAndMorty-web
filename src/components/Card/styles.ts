import styled from 'styled-components'
import Theme from '../../theme';

export const CardContainer = styled.div`
    border-radius: 15px;
    width: 160px;
    height: 110px;
    //background: ${Theme.colors.backgroundCardEletric};;
    background: linear-gradient(8.46deg, #46A487 -0.58%, #46D7AB 108.38%);
    border: transparent;
    margin: 0 11px 18px;
    padding: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 77px;
        height: 95px;
        padding: 2px;
    }

    @media (max-width: ${Theme.breakPoints.mobile}) {
        margin: 0 6px 10px;
        width: 140px;
        height: 94px;

        img {
            width: 66px;
            height: 75px;
            padding: 2px;
        }
    }

    
`

export const InfoContainer = styled.div`
    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 10px;
        color: ${Theme.colors.textWhite};
    }
`;

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        display: flex;
        font-weight: 500;
        font-size: 8px;
        align-items: center;
        justify-content: center;
        padding: 4px;
        width: 48px;
        height: 20px;
        color: ${Theme.colors.textWhite};

        //border: 1px solid ${Theme.colors.backgroundCardEletric};
        //background: ${Theme.colors.backgroundCardEletric}40;
        border-radius: 38px;

        //background: #FFFFFF;
        background-blend-mode: soft-light;
        //opacity: 0.4;

        & + span {
            margin-top: 6px;
        }

    }
`;