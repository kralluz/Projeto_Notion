import { Article } from "./article/article.component";
import { Header } from "./header/header.component";
import { MainStyle } from "./main.style";

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
