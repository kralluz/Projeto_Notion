import { SideBar } from "./components/Sidebar";
import { Main } from "./components/Main";
import { AppStyled, MainContainer } from "./App.styles";
import { useState } from "react";


export function App() {
    const [isOpenSideBar, setIsOpenSideBar] = useState(true);

    function switchOpenOrClose() {
        setIsOpenSideBar(!isOpenSideBar);
    }

    return (
        <>
            <AppStyled>
                <SideBar
                    isopensidebarvalue={isOpenSideBar}
                    switchOpenOrClose={switchOpenOrClose}
                />
                <MainContainer isopensidebarvalue={isOpenSideBar}>
                    <Main />
                </MainContainer>
            </AppStyled>
        </>
    );
};