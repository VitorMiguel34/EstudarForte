import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import PrivateRoute from './components/PrivateRoute.tsx'
import AOS from 'aos'
import "aos/dist/aos.css"
import './App.css'
import Header from './components/Header.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Tasks from './pages/Tasks.tsx'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true)
  
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<PrivateRoute condition={!isAuthenticated} redirectPage="tasks/" children={<Home/>}/>}/>
          <Route path="login/" element={<Login/>}/>
          <Route path="register/" element={<Register/>}/>
          <Route path='tasks/' element={<PrivateRoute condition={isAuthenticated} redirectPage='/' children={<Tasks/>}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

