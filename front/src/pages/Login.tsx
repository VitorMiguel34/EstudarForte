import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { type LoginData, loginUser} from '../service/api'

interface LoginFormProps{
  setIsAuthenticated: Function,
}

export default function LoginForm({setIsAuthenticated}: LoginFormProps): React.JSX.Element {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState<LoginData>({email:"",password:""})

  function updateLoginData(e: React.ChangeEvent<HTMLInputElement>){
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
    e.preventDefault()

    try{
      await loginUser(loginData)
      setIsAuthenticated(true)
      navigate('/')
    } catch(error){
      alert('Verifique se o e-mail e a senha estão corretos!')
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-start justify-center px-6">
      <div data-aos="fade-down" className="mt-5 w-full max-w-md bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Bem-vindo de volta
        </h2>

        <p className="text-zinc-400 text-center mb-8">
          Faça login para continuar organizando suas ideias.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={loginData.email}
              onChange={updateLoginData}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Senha
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
            Entrar
          </button>
        </form>

        <div className="my-6 border-t border-zinc-800"></div>

        <p className="text-center text-zinc-400 text-sm">
          Não tem uma conta?{" "}
          <a
            href="/register"
            className="text-purple-500 hover:text-purple-400 font-medium"
          >
            Criar conta
          </a>
        </p>

      </div>
    </div>
  );
}