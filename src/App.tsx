import { SideBar } from "./components/Sidebar";
import { Main } from "./components/Main";
import { AppStyled } from "./App.styles";

function App() {
    return (
        <>
            <AppStyled>
                <SideBar />
                <Main />
            </AppStyled>
        </>
    );
}

export default App;
