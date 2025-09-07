import Navbar from './components/Navbar.jsx'
import Leftbar from './components/Leftbar.jsx'
import Rightbar from './components/Rightbar.jsx'
import { useThemeStore } from './store/useThemeStore.js'
import { getTheme } from './utils/getTheme.js'

function App() {
  const {theme} = useThemeStore()

  return (
    <div className={`font-mono w-full min-h-[100vh] cursor-default bg-gradient-to-b from-black via-black to-zinc-900 text-white ${ getTheme(theme) }`}>
        <Navbar />

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col md:flex-row gap-6 w-full px-4 md:px-8 py-6">
          <div className="md:w-1/4 lg:w-1/5 xl:w-1/5">
            <Leftbar />
          </div>
          <div className="md:w-3/4 lg:w-4/5 xl:w-4/5">
            <Rightbar />
          </div>
        </div>
    </ div>
  )
}

export default App
