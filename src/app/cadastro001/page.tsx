"use client";

import { useState } from "react";
import { Mail, Lock, User, Phone, BriefcaseMedical, BookOpen, ClipboardList, ShieldCheck } from "lucide-react";

export default function CadastroPage() {
    const [perfil, setPerfil] = useState("");

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-teal-100 to-blue-200 p-8">
            <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="w-full md:w-1/2 p-16 flex flex-col justify-center min-h-[500px] bg-white">
                    <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">Cadastro</h2>
                    <form className="flex flex-col gap-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="nome" className="text-gray-700 text-lg">Nome</label>
                                <div className="flex items-center border rounded-xl bg-gray-50 overflow-hidden border-gray-300">
                                    <span className="p-4 bg-gray-100 text-gray-500">
                                        <User size={22} />
                                    </span>
                                    <input id="nome" type="text" className="w-full p-4 text-lg focus:outline-none bg-transparent" placeholder="Digite seu nome" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-gray-700 text-lg">E-mail</label>
                                <div className="flex items-center border rounded-xl bg-gray-50 overflow-hidden border-gray-300">
                                    <span className="p-4 bg-gray-100 text-gray-500">
                                        <Mail size={22} />
                                    </span>
                                    <input id="email" type="email" className="w-full p-4 text-lg focus:outline-none bg-transparent" placeholder="Digite seu e-mail" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="senha" className="text-gray-700 text-lg">Senha</label>
                                <div className="flex items-center border rounded-xl bg-gray-50 overflow-hidden border-gray-300">
                                    <span className="p-4 bg-gray-100 text-gray-500">
                                        <Lock size={22} />
                                    </span>
                                    <input id="senha" type="password" className="w-full p-4 text-lg focus:outline-none bg-transparent" placeholder="Digite sua senha" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="confirmeSenha" className="text-gray-700 text-lg">Confirme sua senha</label>
                                <div className="flex items-center border rounded-xl bg-gray-50 overflow-hidden border-gray-300">
                                    <span className="p-4 bg-gray-100 text-gray-500">
                                        <Lock size={22} />
                                    </span>
                                    <input id="confirmeSenha" type="password" className="w-full p-4 text-lg focus:outline-none bg-transparent" placeholder="Confirme sua senha" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="telefone" className="text-gray-700 text-lg">Telefone</label>
                            <div className="flex items-center border rounded-xl bg-gray-50 overflow-hidden border-gray-300">
                                <span className="p-4 bg-gray-100 text-gray-500">
                                    <Phone size={22} />
                                </span>
                                <input id="telefone" type="tel" className="w-full p-4 text-lg focus:outline-none bg-transparent" placeholder="Digite seu telefone" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="perfil" className="text-gray-700 text-lg">Perfil de Usuário</label>
                            <select
                                id="perfil"
                                className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
                                value={perfil}
                                onChange={(e) => setPerfil(e.target.value)}
                            >
                                <option value="">Selecione um perfil</option>
                                <option value="medico">Médico</option>
                                <option value="pesquisador">Pesquisador</option>
                                <option value="enfermeiro">Enfermeiro</option>
                                <option value="administrador">Administrador</option>
                            </select>
                        </div>

                        {perfil === "medico" && (
                            <div className="flex flex-col gap-2">
                                <label htmlFor="crm" className="text-gray-700 text-lg">CRM</label>
                                <div className="flex items-center border rounded-xl bg-gray-50 overflow-hidden border-gray-300">
                                    <span className="p-4 bg-gray-100 text-gray-500">
                                        <BriefcaseMedical size={22} />
                                    </span>
                                    <input id="crm" type="text" className="w-full p-4 text-lg focus:outline-none bg-transparent" placeholder="Digite seu CRM" />
                                </div>
                            </div>
                        )}
                        {perfil === "pesquisador" && (
                            <div className="flex flex-col gap-2">
                                <label htmlFor="instituicao" className="text-gray-700 text-lg">Instituição</label>
                                <div className="flex items-center border rounded-xl bg-gray-50 overflow-hidden border-gray-300">
                                    <span className="p-4 bg-gray-100 text-gray-500">
                                        <BookOpen size={22} />
                                    </span>
                                    <input id="instituicao" type="text" className="w-full p-4 text-lg focus:outline-none bg-transparent" placeholder="Digite sua instituição" />
                                </div>
                            </div>
                        )}
                        {perfil === "enfermeiro" && (
                            <div className="relative">
                                <label htmlFor="coren" className="block text-gray-700 text-lg">COREN</label>
                                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-gray-50">
                                    <span className="p-4 bg-gray-100 text-gray-500">
                                        <ClipboardList size={22} />
                                    </span>
                                    <input type="coren" className="w-full p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg" placeholder="Digite seu COREN" />
                                </div>
                            </div>
                        )}
                        {perfil === "administrador" && (
                            <div className="flex flex-col gap-2">
                                <label htmlFor="codigoAcesso" className="text-gray-700 text-lg">Código de Acesso</label>
                                <div className="flex items-center border rounded-xl bg-gray-50 overflow-hidden border-gray-300">
                                    <span className="p-4 bg-gray-100 text-gray-500">
                                        <ShieldCheck size={22} />
                                    </span>
                                    <input id="codigoAcesso" type="text" className="w-full p-4 text-lg focus:outline-none bg-transparent" placeholder="Digite o código de acesso" />
                                </div>
                            </div>
                        )}
                        <div className="flex gap-4 pt-4">
                            <button className="flex-1 bg-teal-600 text-white py-4 rounded-xl hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
                                Cadastrar
                            </button>
                            <button className="flex-1 bg-gray-300 text-gray-800 py-4 rounded-xl hover:bg-gray-400 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>

                {/* Lado direito - Mensagem */}
                <div className="hidden md:flex md:w-1/2 bg-teal-600 text-white items-center justify-center p-16 min-h-[500px]">
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
            </div>
        </div>
    );
}
