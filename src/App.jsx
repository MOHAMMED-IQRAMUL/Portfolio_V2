import Navbar from './components/Navbar.jsx'
import Leftbar from './components/Leftbar.jsx'
import Rightbar from './components/Rightbar.jsx'
import { useThemeStore } from './store/useThemeStore.js'
import { getTheme } from './utils/getTheme.js'

function App() {
  const {theme} = useThemeStore()

  return (
    <div className={`w-full min-h-[100vh] font-mono cursor-pointer bg-black ${ getTheme(theme) }`} >

       
        <Navbar />
        
        <hr className='text-gray' />
        
        <div className="flex ">
          <Leftbar />
          <Rightbar />
        </div>
       

    </ div>
  )
}

export default App
