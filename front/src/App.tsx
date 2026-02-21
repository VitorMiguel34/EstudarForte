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
import { getIsAuthenticated, logOut } from './service/api.ts'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  async function verifyAuthentication(): Promise<void>{
    try{
      const response: boolean = await getIsAuthenticated()
      console.log(`response: ${response}`)
      setIsAuthenticated(response)
    }
    catch(error){
      setIsAuthenticated(false)
    }
  }
  
  useEffect(() => {
    AOS.init()
    verifyAuthentication()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<PrivateRoute condition={!isAuthenticated} redirectPage="tasks/" children={<Home/>}/>}/>
          <Route path="login/" element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path="register/" element={<Register/>}/>
          <Route path='tasks/' element={<PrivateRoute condition={isAuthenticated} redirectPage='/' children={<Tasks/>}/>}></Route>
        </Routes>
      </BrowserRouter>
      <button className="width 100px bg-black m-2 text-white rounded-md"  onClick={() => {
        logOut()
        setIsAuthenticated(false)
      }}>Realizar logout</button>
    </>
  )
}

