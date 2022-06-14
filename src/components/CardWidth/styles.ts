import styled, { css } from 'styled-components'
import Theme from '../../theme'
import { ICardWidth } from './interfaces'

export const ContainerCard = styled.div<ICardWidth>`

    display: flex;
    height: ${Theme.spacings.space32};
    background: ${Theme.colors.backgroundCard};
    border: 1px solid ${Theme.colors.backgroundCard};
    box-shadow: 0rem 0.5rem 0.5rem rgb(1 28 64 / 20%);

    ${(props) =>
    props.variations === "primary" &&
    css`
        width: ${Theme.spacings.space41};


        @media (max-width: ${Theme.breakPoints.ipadPro}) {
            width: ${Theme.spacings.space39};
        }

        @media (max-width: ${Theme.breakPoints.mobile}) {
            width: ${Theme.spacings.space44};
        }

    `}

  ${(props) =>
    props.variations === "secondary" &&
    css`
        width: ${Theme.spacings.space43};


        @media (max-width: ${Theme.breakPoints.ipadPro}) {
            width: ${Theme.spacings.space38};
        }

        @media (max-width: ${Theme.breakPoints.mobile}) {
            width: ${Theme.spacings.space44};
        }


    `}




`

export const Info = styled.div<ICardWidth>`
display: flex;
    flex-direction: column;
    margin-left: ${Theme.spacings.space06}; 

    span {
        font-weight: ${Theme.font.weight.semiBold};
        font-size: ${Theme.sizes.heading05};
        line-height: ${Theme.sizes.heading03};
        color: ${Theme.colors.blue};
        margin: ${Theme.spacings.space05} 0 ${Theme.spacings.space09} ${Theme.spacings.space08};

        @media (max-width: ${Theme.breakPoints.ipadPro}) {
            font-size: ${Theme.sizes.textLarge};
            line-height: ${Theme.sizes.heading06};
        }

    }

    ${(props) =>
    props.variations === "primary" &&
    css`
        width: ${Theme.spacings.space44};
    `}

    ${(props) =>
    props.variations === "secondary" &&
    css`
        width: ${Theme.spacings.space41};
    `}


`

export const Title = styled.h5<ICardWidth>`
    ${(props) =>
    props.variations === "primary" &&
    css`
    font-weight: ${Theme.font.weight.semiBold};
    font-size: ${Theme.sizes.heading05};
    line-height:${Theme.sizes.heading03}; ;
    color: ${Theme.colors.dark};
    margin: ${Theme.spacings.space15} 0 ${Theme.spacings.space03};


    @media (max-width: ${Theme.breakPoints.ipadPro}) {
            font-size: ${Theme.sizes.textLarge};
            line-height: ${Theme.sizes.heading06};
    }

    `}

  ${(props) =>
    props.variations === "secondary" &&
    css`
        font-weight: ${Theme.font.weight.semiBold};
        font-size: ${Theme.sizes.heading06};
        line-height:${Theme.sizes.heading04}; ;
        color: ${Theme.colors.cardSubTitle};
        margin: ${Theme.spacings.space06} 0 ${Theme.spacings.space09}
    `}
`;

export const SubTitle = styled.p<ICardWidth>`

${(props) =>
props.variations === "primary" &&
    css`
        font-weight: ${Theme.font.weight.semiBold};
        font-size: ${Theme.sizes.textLarge};
        line-height:${Theme.sizes.heading05}; ;
        color: ${Theme.colors.cardSubTitle};

        @media (max-width: ${Theme.breakPoints.ipadPro}) {
            font-size: ${Theme.sizes.textMedium};
            line-height: ${Theme.sizes.textLarge};
    }

    `};

  ${(props) =>
    props.variations === "secondary" &&
    css`
        font-weight: ${Theme.font.weight.normal};
        font-size: ${Theme.sizes.textSmall};
        line-height:${Theme.sizes.textLarge}; ;
        color: ${Theme.colors.cardSubTitle};
    `}
`

export const Image = styled.img<ICardWidth>`
    width: 176px;
    //flex: 0.3;
    width: ${Theme.spacings.space37}; 

    @media (max-width: ${Theme.breakPoints.mobile}) {
        width: 144px;
    }
`

