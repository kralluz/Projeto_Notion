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
    transition: .5s;
`;

export const SideBarContainer = styled.div<SideBar>`
    position: ${props => props.isOpenSideBarValue ? 'relative' : 'absolute'};
    top: ${props => props.isOpenSideBarValue ? '0%' : '50%'};
    left: 0;
    transform: ${props => props.isOpenSideBarValue ? 'translateY(0%)' : 'translateY(-50%)'};
    min-width: 220px;
    background-color: green;
    transition: .5s;
`

