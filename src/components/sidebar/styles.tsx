import styled from 'styled-components';

export const SideBarContainer = () => styled.div`
    position: ${(props:any) => 
        props.position ? 'relative' : 'absolute'
    };
    width: fit-content;
    background-color: red;
`;