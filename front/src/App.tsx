import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useEffect} from 'react'
import Header from './components/Header.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Tasks from './pages/Tasks.tsx'
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
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login/" element={<Login/>}/>
          <Route path="register/" element={<Register/>}/>
          <Route path='tasks/' element={<Tasks/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

