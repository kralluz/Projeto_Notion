import styled from 'styled-components';
import '../../styles/index.scss';

export const SideBarContainer = styled.div`
    position: ${(props:any) => 
        props.position ? 'relative' : 'absolute'
    };
    min-width: 220px;
    width: fit-content;
    height: 100vh;
    background-color: #202020;
`;