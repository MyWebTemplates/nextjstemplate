"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const setores = ['Infectologia', 'Cuidados Paliativos', 'Cardiologia'];

export default function DashboardPage() {
    const [setorAtivo, setSetorAtivo] = useState('Infectologia');
    const [busca, setBusca] = useState('');

    return (
        <>
            <main className="min-h-screen bg-gradient-to-b from-[#CCFBF1] to-[#BFDBFE] p-6">
                <h2 className="text-2xl font-semibold text-gray-700">
                    Bem-vindo(a) ao Sistema HUOC!
                </h2>
                {/* Abas de Setores */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Setores Médicos</h2>
                    <div className="flex flex-wrap gap-4">
                        {setores.map((setor) => (
                            <button
                                key={setor}
                                onClick={() => setSetorAtivo(setor)}
                                className={`px-4 py-2 rounded-full transition text-sm font-medium shadow-md ${setorAtivo === setor
                                    ? 'bg-[#0D9488] text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {setor}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Área principal com busca e botão */}
                <section className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        {/* Campo de busca */}
                        <input
                            type="text"
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            placeholder="Buscar por nome ou nº de prontuário..."
                            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                        />

                        {/* Botão novo formulário */}
                        <button className="bg-[#0D9488] text-white px-5 py-3 rounded-full hover:bg-teal-700 transition">
                            Novo Formulário
                        </button>
                    </div>

                    {/* Simulação de dados de pacientes */}
                    <article>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Pacientes de {setorAtivo}</h3>
                        <ul className="space-y-3">
                            {[1, 2, 3].map((paciente) => (
                                <li key={paciente} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                                    <p className="text-gray-800">Paciente {paciente} - Prontuário #{paciente}000</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                </section>
            </main>
        </>
    );
}
