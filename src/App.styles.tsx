import { styled } from 'styled-components';

interface MainProps {
    isopensidebarvalue: boolean;
}

export const AppStyled = styled.div`
    display: flex;
`;

export const MainContainer = styled.div<MainProps>`
    position: absolute;
    right: 0;
    width: ${(props) =>
        props.isopensidebarvalue ? "calc(100% - 220px)" : "100%"};
    z-index: -1;
    transition: 0.5s;
`;
