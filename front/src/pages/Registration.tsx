import React,{useState} from "react";

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
    const registrationFields = Object.keys(registrationFieldsPlaceholders) as (keyof RegistrationData)[]
    const [registrationData, setRegistrationData] = useState<RegistrationData>({
        fullName:"",email:"",password:"",confirmPassword:""
    })

    function updateRegistrationData(e: React.ChangeEvent<HTMLInputElement>){
        setRegistrationData(
            {...registrationData, [e.target.name]: e.target.value}
        )
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div data-aos="fade-down" className="bg-zinc-900/70 p-12 rounded-2xl w-full max-w-md mt-5">
                <h2 className="text-3xl font-extrabold text-center mb-2 text-white">Create Account</h2>
                <p className="text-center text-gray-400 mb-8">Sign up to start organizing your ideas.</p>

                <form className="space-y-5">
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
