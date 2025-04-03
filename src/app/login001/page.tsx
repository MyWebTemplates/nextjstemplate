import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Lado esquerdo com background diferenciado */}
                <div className="hidden md:flex md:w-1/2 bg-blue-600 text-white items-center justify-center p-16">
                    <h2 className="text-4xl font-bold animate-fade-in">Bem-vindo!</h2>
                </div>

                {/* Lado direito - Formulário */}
                <div className="w-full md:w-1/2 p-12 space-y-8">
                    <form className="space-y-8">
                        <div className="relative">
                            <label className="block text-gray-700">E-mail</label>
                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                <span className="p-3 bg-gray-100 text-gray-500">
                                    <Mail size={20} />
                                </span>
                                <input
                                    type="email"
                                    className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Digite seu e-mail"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-gray-700">Senha</label>
                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                <span className="p-3 bg-gray-100 text-gray-500">
                                    <Lock size={20} />
                                </span>
                                <input
                                    type="password"
                                    className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Digite sua senha"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Lembrar-me
                            </label>
                            <a href="#" className="text-blue-600 hover:underline">Esqueci minha senha</a>
                        </div>

                        <div className="flex space-x-6">
                            <button
                                type="submit"
                                className="w-1/2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                            >
                                Entrar
                            </button>
                            <button
                                type="button"
                                className="w-1/2 bg-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-400 transition-all duration-300 transform hover:scale-105"
                            >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
