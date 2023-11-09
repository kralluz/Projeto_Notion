import React from "react";
import { Article } from "../Article";
import { Header } from "../Header";
import { MainStyle } from "./style";
import axios from "axios";
import { useState, useEffect } from 'react';


export const Main: React.FC = () => {
    const [text, setText] = useState();
    const api = axios.create({
        baseURL: "http://localhost:3010",
        timeout: 8000,
    });


    useEffect(() => {
        const GetProducts = async () => {
            await api
                .get("/")
                .then((response) => {
                    setText(response.data);
                    text
                })
                .catch((error) => {
                    console.log("error", error);
                    alert("error");
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
