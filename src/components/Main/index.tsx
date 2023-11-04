import { Article } from "../Article";
import { Header } from "../Header";
import { MainStyle } from "./style";

export const Main = ( ) => {
    return (
        <>
            <MainStyle>
                <Header/>
                <Article/>
            </MainStyle>
        </>
    );
};
