import React,{useState , FormEvent} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface LoginData{
  email: string,
  password: string
}

export default function LoginForm(): React.JSX.Element {

  const [loginData, setLoginData] = useState<LoginData>({email:"",password:""})
  const navigate = useNavigate()

  function updateLoginData(e: React.ChangeEvent<HTMLInputElement>){
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  async function login( e : FormEvent){

    e.preventDefault()

    const url = 'http://127.0.0.1:8000/token/'

    const user : LoginData = {
      email: loginData.email,
      password: loginData.password
    }

    try{

      const response = await axios.post(url, user)
      const token = response.data.access
      localStorage.setItem('token', token)
      //console.log(`O TOKEN : ${token}`)
      console.log(response)
      navigate('/tasks')

    } catch(error){
      alert('Verifique se a senha e o email estão corretos!')
      console.log(error)

    }

  }

  return (
    <div className="min-h-screen bg-black flex items-start justify-center px-6">
      <div data-aos="fade-down" className="mt-5 w-full max-w-md bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Welcome back
        </h2>

        <p className="text-zinc-400 text-center mb-8">
          Log in to continue organizing your ideas.
        </p>

        <form onSubmit={login} className="space-y-5">
          
          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              value={loginData.email}
              onChange={updateLoginData}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={loginData.password}
              onChange={updateLoginData}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-purple-600/20"
          >
            Log In
          </button>
        </form>

        <div className="my-6 border-t border-zinc-800"></div>

        <p className="text-center text-zinc-400 text-sm">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-purple-500 hover:text-purple-400 font-medium"
          >
            Create one
          </a>
        </p>

      </div>
    </div>
  );
}
