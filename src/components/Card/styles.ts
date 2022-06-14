import styled, { css } from 'styled-components';
import Theme from '../../theme'
import { ICardStatus } from './interfaces'

export const CardContainer = styled.div`
    display: flex;
    background: ${Theme.colors.brown};
    height: ${Theme.spacings.space42};
    width: ${Theme.spacings.space40};
    border-radius: 4px;


    @media (max-width: ${Theme.breakPoints.ipad}) {
        height: ${Theme.spacings.space30};
        width: ${Theme.spacings.space33};
    }

    @media (max-width: ${Theme.breakPoints.mediumMobile}) {
        width: ${Theme.spacings.space32};
    }
`

export const ImageCard = styled.img`
    width: ${Theme.porcentages.porcentage10};
    margin-right: ${Theme.spacings.space02};
    
`

export const CardInfo = styled.div`
    width: ${Theme.porcentages.porcentage10};
    margin-bottom: ${Theme.spacings.space01};

    h3 {
        font-weight: ${Theme.font.weight.bold};
        font-size: ${Theme.sizes.textMedium};
        line-height: ${Theme.spacings.space10};
        color: ${Theme.colors.textWhite};

        @media (max-width: ${Theme.breakPoints.ipad}) {
            font-size: ${Theme.spacings.space06}; 
            line-height: ${Theme.spacings.space07};
        }

    }

`

export const Status = styled.div`
    display: flex;
    margin-bottom: ${Theme.spacings.space01}; 

    span {
        font-weight: ${Theme.font.weight.normal};
        font-size: ${Theme.sizes.textXSmall};
        line-height: ${Theme.sizes.textMedium};
        color: ${Theme.colors.textWhite};
    

        @media (max-width: ${Theme.breakPoints.ipad}) {
            font-size: ${Theme.spacings.space06}; 
            line-height: ${Theme.spacings.space07};
        }
    
    }

`

export const Circle = styled.div<ICardStatus>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: ${Theme.spacings.space05}; 

    ${(props) =>
      props.status === "Alive" &&
      css`
        background: ${Theme.colors.green};
    `}
    
    ${(props) =>
      props.status === "Dead" &&
      css`
        background: ${Theme.colors.textWhite};
    `}


    ${(props) =>
      props.status === "Unknown" &&
      css`
        background: ${Theme.colors.blue};
    `}

    `;


export const Apparition = styled.div`
    margin-bottom: ${Theme.spacings.space01}; 

    p {
        font-weight: ${Theme.sizes.textMedium};
        font-size: ${Theme.sizes.textXSmall};
        line-height: ${Theme.sizes.textMedium};
        color: ${Theme.colors.gray};

        @media (max-width: ${Theme.breakPoints.ipad}) {
            font-size: ${Theme.spacings.space04};  
            line-height: ${Theme.spacings.space06}; 
        }

    }

    span {

        font-weight: ${Theme.sizes.textMedium};
        font-size: ${Theme.sizes.textSmall};
        line-height: ${Theme.spacings.space08};
        color: ${Theme.colors.textWhite};

        @media (max-width: ${Theme.breakPoints.ipad}) {
            font-size: ${Theme.spacings.space05};
            line-height: ${Theme.spacings.space06};
        }

    }
`

