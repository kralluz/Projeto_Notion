import './styles/index.scss';
import './App.css';
import { SideBar } from './components/sidebar'
function App() {
  return (
    <>
      <div className='min-h-screen text-zinc-900 bg-gradient-to-tl from-gray-200 via-gray-400 to-gray-600'>
        <div className='bg-white w-[1100px] mx-auto rounded-xl min-h-[200px] shadow-sm border border-black/20'>
          <SideBar/>        
          <main>
            <p>awdwd</p>
            <h1>awndaodnáo</h1>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
