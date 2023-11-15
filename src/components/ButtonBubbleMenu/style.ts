import styled from 'styled-components';
import '../../styles/global.css';

export const BubbleMenuDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gray-2);
    border-radius: 8px;
    box-shadow: 3px 5px 5px 0px black;
    gap: 1px;
    border-radius: 8px;
    overflow: hidden;
    `;

export const BubbleMenuButton = styled.button`
    all: none;
    margin: 0.3rem;
    margin: 0;
    padding: 6px 5px 6px 5px;
    background: var(--gray-5);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #f8f9facd;

    span{
        transform: translateY(2px);
        border-bottom: 1px solid var(--gray-1);
    }


    &:hover{
        background: #272727;
    }

    svg{
        transform: translateY(2px);
        color: #f8f9facd;
        font-size: 18px;
    }
`



