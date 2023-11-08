import React from 'react';
import { Article } from "../Article";
import { Header } from "../Header";
import { MainStyle } from "./style";

export const Main: React.FC = () => {
    return (
        <MainStyle>
            <Header/>
            <Article/>
        </MainStyle>
    );
};