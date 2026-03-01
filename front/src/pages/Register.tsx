import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { type RegisterData, registerUser } from "../service/api";

export default function RegisterPage(): React.JSX.Element {
    const navigate = useNavigate()

    const registerFieldPlaceholders: RegisterData = {
        name:"Nome completo",
        email:"E-mail",
        password:"Senha",
        confirmPassword:"Confirmar senha"
    }

    const registrationFields = Object.keys(registerFieldPlaceholders) as (keyof RegisterData)[]
    
    const [registerData, setRegisterData] = useState<RegisterData>({
        name:"",email:"",password:"",confirmPassword:""
    })

    function updateRegistrationData(e: React.ChangeEvent<HTMLInputElement>){
        setRegisterData(
            {...registerData, [e.target.name]: e.target.value}
        )
    }

    async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        if (registerData.confirmPassword !== registerData.password){
            alert('As senhas devem ser iguais!')
            return
        }

        try{
            await registerUser(registerData)
            navigate('/login')
        }catch(error){
            alert('Erro ao cadastrar usuário')
            console.error(error)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div data-aos="fade-down" className="bg-zinc-900/70 p-12 rounded-2xl w-full max-w-md mt-5">
                
                <h2 className="text-3xl font-extrabold text-center mb-2 text-white">
                    Criar conta
                </h2>

                <p className="text-center text-gray-400 mb-8">
                    Cadastre-se para começar a organizar suas ideias.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {registrationFields.map((field,idx) => (
                        <input
                            key={idx}
                            type={registerFieldPlaceholders[field].toLowerCase().includes("senha") ? "password" : "text"}
                            name={field}
                            value={registerData[field]}
                            placeholder={registerFieldPlaceholders[field]}
                            onChange={updateRegistrationData}
                            className="w-full p-4 rounded-xl bg-[#2a2a2a] text-white placeholder-gray-500 border border-[#2a2a2a] focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all"
                        />
                    ))}

                    <button
                        type="submit"
                        className="w-full p-4 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 active:scale-95 transition-all"
                    >
                        Cadastrar
                    </button>
                </form>

                <div className="flex justify-center mt-6 text-sm text-gray-400">
                    <span>
                        Já tem uma conta?{" "}
                        <a href="/login" className="text-pink-500 hover:underline">
                            Entrar
                        </a>
                    </span>
                </div>

            </div>
        </div>
    );
}