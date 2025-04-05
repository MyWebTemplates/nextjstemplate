'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, LogOut, User, LayoutDashboard, Users, FileText } from 'lucide-react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    // Fecha o dropdown ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        router.push('/login001');
    };

    return (
        <div className="w-full lg:w-auto">
            {/* MOBILE MENU BUTTON */}
            <div className="lg:hidden flex justify-end mb-2">
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-[#0D9488] focus:outline-none"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MENU NAVIGATION */}
            <nav className={`${mobileMenuOpen ? 'flex flex-col space-y-4' : 'hidden'
                } lg:flex lg:flex-row lg:items-center lg:gap-8 text-lg transition-all`}>
                {/* Dashboard */}
                <div>
                    <a href="/dashboard001" className="flex items-center gap-2 text-gray-700 hover:text-[#0D9488] transition">
                        <LayoutDashboard size={20} /> Dashboard
                    </a>
                </div>

                {/* Pacientes */}
                <div>
                    <a href="/pacientes" className="flex items-center gap-2 text-gray-700 hover:text-[#0D9488] transition">
                        <Users size={20} /> Pacientes
                    </a>
                </div>

                {/* Formulários */}
                <div>
                    <a href="/formularios" className="flex items-center gap-2 text-gray-700 hover:text-[#0D9488] transition">
                        <FileText size={20} /> Formulários
                    </a>
                </div>

                {/* Dropdown Usuário */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 bg-[#0D9488] text-white px-3 py-2 rounded-full hover:bg-teal-700 hover:shadow-md transition duration-300"
                        aria-label="Abrir menu do usuário"
                    >
                        <User size={20} />
                        <ChevronDown size={18} />
                    </button>

                    {/* DROPDOWN */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-xl animate-fadeIn z-10">
                            <a
                                href="/perfil"
                                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-gray-800 transition rounded-t-xl"
                            >
                                <User size={18} /> Meu Perfil
                            </a>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 w-full text-left px-4 py-3 hover:bg-gray-100 text-gray-800 transition rounded-b-xl"
                            >
                                <LogOut size={18} /> Sair
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}
