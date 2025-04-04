"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errors, setErrors] = useState({ email: "", senha: "" });

    const validateForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const newErrors = { email: "", senha: "" };

        if (!email) {
            newErrors.email = "O e-mail é obrigatório.";
        }

        if (!senha) {
            newErrors.senha = "A senha é obrigatória.";
        }

        setErrors(newErrors);

        if (!newErrors.email && !newErrors.senha) {
            console.log("Login autorizado!");
            // Aqui você pode prosseguir com o login
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-teal-100 to-blue-200 p-8">
            <div className="flex w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl bg-white/30 backdrop-blur-md border border-white/40">

                {/* Lado esquerdo - Mensagem */}
                <div className="hidden md:flex md:w-1/2 bg-teal-600/90 text-white items-center justify-center p-16 min-h-[500px]">
                    <div className="text-center max-w-lg">
                        <h1 className="text-5xl font-extrabold leading-tight">
                            Bem-vindo ao Sistema HUOC!
                        </h1>
                        <h2 className="text-2xl font-semibold mt-4">
                            Otimizamos a gestão e armazenamento de dados clínicos.
                        </h2>
                        <p className="text-lg mt-6 leading-relaxed">
                            Conte com tecnologia de ponta para um acesso seguro e eficiente às informações que você precisa!
                        </p>
                    </div>
                </div>

                {/* Lado direito - Formulário */}
                <div className="w-full md:w-1/2 p-16 flex flex-col justify-center min-h-[500px]">
                    <form onSubmit={validateForm} className="flex flex-col gap-6">
                        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">Login</h2>

                        {/* Campo E-mail */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 text-lg">E-mail</label>
                            <div className={`flex items-center border rounded-xl bg-gray-50 overflow-hidden ${errors.email ? "border-red-500" : "border-gray-300"}`}>
                                <span className="p-4 bg-gray-100 text-gray-500">
                                    <Mail size={22} />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-4 text-lg focus:outline-none bg-transparent"
                                    placeholder="Digite seu e-mail"
                                />
                            </div>
                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                        </div>

                        {/* Campo Senha */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 text-lg">Senha</label>
                            <div className={`flex items-center border rounded-xl bg-gray-50 overflow-hidden ${errors.senha ? "border-red-500" : "border-gray-300"}`}>
                                <span className="p-4 bg-gray-100 text-gray-500">
                                    <Lock size={22} />
                                </span>
                                <input
                                    type="password"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    className="w-full p-4 text-lg focus:outline-none bg-transparent"
                                    placeholder="Digite sua senha"
                                />
                            </div>
                            {errors.senha && <span className="text-red-500 text-sm">{errors.senha}</span>}
                        </div>

                        {/* Lembrar-me + Esqueci a senha */}
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Lembrar-me
                            </label>
                            <a href="#" className="text-teal-600 hover:underline">Esqueci minha senha</a>
                        </div>

                        {/* Botões */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                className="flex-1 bg-teal-600 text-white py-4 rounded-xl hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
                            >
                                Entrar
                            </button>
                            <button
                                type="button"
                                className="flex-1 bg-gray-300 text-gray-800 py-4 rounded-xl hover:bg-gray-400 transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
                            >
                                Cadastre-se
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
