import styled from 'styled-components';
import '../../styles/global.css';

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: ${(props:any) => 
        props.position ? 'relative' : 'absolute'
    };
    min-width: 220px;
    width: fit-content;
    height: 100vh;
    background-color: var(--gray-5);
    
    
`;