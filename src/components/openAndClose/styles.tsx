import { styled } from 'styled-components';
import '../../styles/global.css';

export const OpenAndClose = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    
    img{
        height: 20px;
        padding-left: 1em;
        filter: invert(1);  
    }
    svg{
        font-size: 25px;
        margin-right: .5em;
        border-radius: 3px;
        color: var(--gray-1);
        background-color: transparent;
        transition: .3s;
        &:hover{
            background-color: #272727;
            color: var(--gray-0);
        }
    }
`