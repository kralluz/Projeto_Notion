import { SideBar } from "./components/sidebar/sidebar.container";
import { Main } from "./components/main/main.component";
import { AppStyled } from "./App.styles";


function App() {
  return (
    <>
     
       <AppStyled>
          <SideBar />
          <Main/>
       </AppStyled>
          
      
     
      
    </>
  )
}

export default App;
