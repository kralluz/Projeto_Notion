import { styled } from 'styled-components';

interface Main {
    isOpenSideBarValue: boolean;
}

export const AppStyled = styled.div`
    display: flex;
`

export const MainContainer = styled.div`
    position: absolute;
    right: 0;
    width: ${props => props.isOpenSideBarValue ? 'calc(100% - 220px)' : '100%'};
    z-index: -1;
    transition: .5s;
`