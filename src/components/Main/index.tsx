import React from "react";
import { Article } from "../Article";
import { Header } from "../Header";
import { MainStyle } from "./style";
import axios from "axios";
import { useState, useEffect } from 'react';


export const Main: React.FC = () => {
    const [text, setText] = useState();
    const api = axios.create({
        baseURL: "https://notion-clone-8n54.onrender.com",
        timeout: 8000,
    });


    useEffect(() => {
        const GetProducts = async () => {
            await api
                .get("/")
                .then((response) => {
                    setText(response.data[0].conteudo);
                })
                .catch((error) => {
                    console.log("error", error);
                });
        };
        GetProducts();
    }, []);

    return (
        <MainStyle>
            <Header />
            {text !== undefined && <Article text={text}  />}
        </MainStyle>
    );
};
