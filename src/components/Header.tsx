'use client';

import Image from 'next/image';
import Navigation from './Navigation';

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-[#CCFBF1] to-[#BFDBFE] shadow-md px-6 py-6 lg:py-8 min-h-[120px] flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* LOGO + TÍTULO */}
            <div className="flex items-center space-x-4">
                <Image
                    src="/logo.png"
                    alt="Logo HUOC"
                    width={48}
                    height={48}
                    className="rounded-md"
                />
                <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                    Sistema de Coleta de Dados Clínicos
                </h1>
            </div>

            {/* MENU DE NAVEGAÇÃO */}
            <Navigation />
        </header>
    );
}
