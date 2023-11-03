import styled from 'styled-components';

export const Container = styled.div`
    position: ${(props:any):void => 
        props.position ? 'relative' : 'absolute'
    };
    width: fit-content;

    background-color: red;
`;