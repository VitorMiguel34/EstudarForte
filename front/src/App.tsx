import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PrivateRoute from './components/PrivateRoute.tsx'
import AOS from 'aos'
import "aos/dist/aos.css"
import './App.css'
import Header from './components/Header.tsx'
import Sidebar from './components/Sidebar.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Profile from './pages/Profile.tsx'
import Tasks from './components/Tasks.tsx'
import { getIsAuthenticated, getUser } from './service/api.ts'

interface User {
  name: string,
  email: string,
  id: number
}

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [checkingAuth, setCheckingAuth] = useState(true)
    const [user, setUser] = useState<User>({ name: "", email: "", id: 0 })

    async function verifyAuthentication(): Promise<void> {
      try {
        const response = await getIsAuthenticated()
        setIsAuthenticated(response)
      }
      catch (error) {
        setIsAuthenticated(false)
      }
      finally {
        setCheckingAuth(false)
      }
    }

    async function getUserData(){
      try{
        const response = await getUser()
        console.log(`Dados: ${JSON.stringify(response)}`)
        setUser(response)
      }
      catch(error){
        console.error(error)
      }
    }

    useEffect(() => {
      AOS.init()
      verifyAuthentication()
    }, [])

    useEffect(() => {
      if(isAuthenticated){
          getUserData()
      }
    }, [isAuthenticated])

    if (checkingAuth) {
      return null
    }
    return (
      <BrowserRouter>
          <div>
              <div className={isAuthenticated ? "flex min-h-screen bg-[#050505]" : ""} style={{backgroundColor: "#0b0016"}}>
                  {(isAuthenticated)? <Sidebar/>:<Header/>}
                  <Routes>
                      <Route path="/" element={<Home isAuthenticated={isAuthenticated} user={user}/>}/>
                      <Route path="login" element={<PrivateRoute condition={!isAuthenticated} redirectPage='/' children={<Login setIsAuthenticated={setIsAuthenticated}/>}/>}/>
                      <Route path="register" element={<Register />} />
                      <Route path="tasks" element={<PrivateRoute condition={isAuthenticated} redirectPage='/' children={<Tasks/>}/>}/>
                      <Route path="user" element={<PrivateRoute condition={isAuthenticated} redirectPage='/' children={<Profile user={user} setIsAuthenticated={setIsAuthenticated}/>}/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}