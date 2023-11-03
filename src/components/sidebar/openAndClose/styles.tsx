import { styled } from 'styled-components';
import '../../../styles/global.css';

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
        color: red;
        background-color: transparent;
        &:hover{
            background-color: #272727;
        }
    }
`