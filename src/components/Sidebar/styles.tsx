import styled from 'styled-components';
import '../../styles/global.css';

interface SideBar {
    isOpenSideBarValue: boolean
}

export const SideBarComponent = styled.div<SideBar>`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    min-width: ${props => props.isOpenSideBarValue ? '220px' : '0px'};
    width: fit-content;
    height: 100vh;
    background-color: var(--gray-5);
    transition: .5s ;
`;

export const SideBarContainer = styled.div<SideBar>`
    position: ${props => props.isOpenSideBarValue ? 'relative' : 'absolute'};
    top: ${props => props.isOpenSideBarValue ? '0%' : '50%'};
    left: ${props => props.isOpenSideBarValue ? '0' : '-170px'};
    transform: ${props => props.isOpenSideBarValue ? 'translateY(0%)' : 'translateY(-50%)'};
    min-width: 220px;
    background-color: var(--gray-5);    
    border-radius: 0 5px 5px 0;
    transition: .6s;
    &:hover{
        left: 0;
    }
`

