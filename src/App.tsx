import { SideBar } from "./components/Sidebar";
import { Main } from "./components/Main";
import { AppStyled } from "./App.styles";

function App() {
    return (
        <>
            <AppStyled>
                <SideBar />
                <div className="main__container">
                    <Main />
                </div>
            </AppStyled>
        </>
    );
}

export default App;
