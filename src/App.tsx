import { SideBar } from "./components/Sidebar";
import { Main } from "./components/Main";
import { AppStyled, MainContainer } from "./App.styles";
import { useState } from 'react'
function App() {
    const [isOpenSideBar, setIsOpenSideBar ] = useState(true)

    function switchOpenOrClose(){
        return isOpenSideBar ? setIsOpenSideBar(false) : setIsOpenSideBar(true)
    }
    let isOpenSideBarValue = Boolean(isOpenSideBar)
    
    return (
        <>
            <AppStyled>
                <SideBar isOpenSideBarValue={isOpenSideBarValue} switchOpenOrClose={switchOpenOrClose} />
                <MainContainer isOpenSideBarValue={isOpenSideBarValue}>
                    <Main />
                    
                </MainContainer>
            </AppStyled>
        </>
    );
}

export default App;