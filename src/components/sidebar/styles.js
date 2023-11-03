import styled from 'styled-components';

export const Container = styled.div`
    position: ${(props) => {
        props.position ? 'relative' : 'absolute'
    }};
    width: fit-content;

    background-color: red;
`;