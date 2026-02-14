import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home.tsx'
import AOS from 'aos'
import "aos/dist/aos.css"
import './App.css'

export default function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

