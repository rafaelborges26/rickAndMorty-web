import { shade } from 'polished';
import styled from 'styled-components'
import Theme from '../../theme';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: initial;
`;

export const ContainerSelect = styled.div`
    margin-left: ${Theme.spacings.space33};
    
    @media(max-width: ${Theme.breakPoints.ipadPro}){
        margin-left: 0;
        display: flex;
        align-items: center;
        padding: 0 30px;
    }
`;

export const Title = styled.h2`
    font-weight: ${Theme.font.weight.bold};
    font-size: ${Theme.spacings.space13};
    line-height: ${Theme.spacings.space17};
    color: ${Theme.colors.blue};
    margin: ${Theme.spacings.space29} 0 ${Theme.spacings.space26} ${Theme.spacings.space33};


    @media(max-width: ${Theme.breakPoints.ipadPro}){
        margin-left: ${Theme.spacings.space26};
        text-align: center;
        margin-left: 0;
        margin-right: 0;
    }

    @media(max-width: ${Theme.breakPoints.mobile}){
        margin-left: 0;
        
        text-align: center;
        font-size: ${Theme.sizes.heading05};
        
    }
;
`

export const Info = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: initial;
    margin-left: ${Theme.spacings.space33};
 
    margin-bottom: ${Theme.spacings.space17};
    
    > div {
        margin-bottom: ${Theme.spacings.space17};
    }
    
    @media(max-width: ${Theme.breakPoints.ipadPro}){
        margin-left: ${Theme.spacings.space26};
    }


    @media(max-width: ${Theme.breakPoints.mobile}){
        margin-left: 0; 
        justify-content: center;
        align-items: center;
    }


`

export const ButtonText = styled.button`
    border: none;
    background: transparent;
    font-weight: ${Theme.font.weight.semiBold};
    font-size: ${Theme.sizes.heading06};
    line-height: ${Theme.sizes.heading04};
    color: ${Theme.colors.textBlack};
    opacity: 0.8;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
    color: ${shade(0.6, `${Theme.colors.textDark}`)};
  }
`;