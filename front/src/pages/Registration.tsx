import React,{useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

interface RegistrationData{
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export default function RegistrationPage(): React.JSX.Element {
    const registrationFieldsPlaceholders: RegistrationData = {
        fullName:"Full name",
        email:"Email",
        password:"password",
        confirmPassword:"Confirm password"
    }
    // what is this bro lmao
    const registrationFields = Object.keys(registrationFieldsPlaceholders) as (keyof RegistrationData)[]

    //state do form
    const [registrationData, setRegistrationData] = useState<RegistrationData>({
        fullName:"",email:"",password:"",confirmPassword:""
    })

    const navigate = useNavigate()

    function updateRegistrationData(e: React.ChangeEvent<HTMLInputElement>){
        setRegistrationData(
            {...registrationData, [e.target.name]: e.target.value}
        )
    }

    async function register_user(e : React.FormEvent){

        //guuuuy what the gemini sang in this 'registrationFieldsPlaceholders' was kidness

            e.preventDefault()

            if (registrationData.confirmPassword !== registrationData.password){
                alert('As senhas devem ser iguais!')
                return
            }

            const user = {
                username: registrationData.fullName,
                email : registrationData.email,
                password : registrationData.password,
            }

            const url = 'http://127.0.0.1:8000/users/register/'

            try{
                
                const response = await axios.post(url, user)
                console.log(response)
                navigate('/login')

            }catch(error){

                console.log('Erro ao cadastrar usuário')
                console.log(error)

            }

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div data-aos="fade-down" className="bg-zinc-900/70 p-12 rounded-2xl w-full max-w-md mt-5">
                <h2 className="text-3xl font-extrabold text-center mb-2 text-white">Create Account</h2>
                <p className="text-center text-gray-400 mb-8">Sign up to start organizing your ideas.</p>

                <form onSubmit={register_user} className="space-y-5">
                {registrationFields.map((field,idx) => (
                    <input
                    key={idx}
                    type={registrationFieldsPlaceholders[field].toLowerCase().includes("password") ? "password" : "text"}
                    name={field}
                    value={registrationData[field]}
                    placeholder={registrationFieldsPlaceholders[field]}
                    onChange={updateRegistrationData}
                    className="w-full p-4 rounded-xl bg-[#2a2a2a] text-white placeholder-gray-500 border border-[#2a2a2a] focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all"
                    />
                ))}

                <button
                    type="submit"
                    className="w-full p-4 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 active:scale-95 transition-all"
                >
                    Sign Up
                </button>
                </form>

                <div className="flex justify-center mt-6 text-sm text-gray-400">
                <span>
                    Already have an account?{" "}
                    <a href="/login" className="text-pink-500 hover:underline">
                    Log in
                    </a>
                </span>
                </div>
            </div>
        </div>
    );
}
