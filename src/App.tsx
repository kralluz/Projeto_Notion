import './styles/index.scss';
import './App.css';
import { SideBar } from './components/sidebar'
import { Main } from './components/main';
import EmojiPicker from 'emoji-picker-react';

function App() {
  return (
    <>
        <SideBar/>        
        <Main/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quis illum modi fugit in officiis. Doloribus aut aspernatur culpa, laudantium iste sequi quos illum facere consectetur commodi aliquid quaerat soluta?</p>
        <EmojiPicker />
    </>
  )
}

export default App
