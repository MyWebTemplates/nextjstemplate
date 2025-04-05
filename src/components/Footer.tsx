'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-8 shadow-inner">
            <p className="text-sm">
                © {currentYear} <span className="font-semibold text-[#0D9488]">Sistema HUOC</span>. Todos os direitos reservados.
            </p>
        </footer>
    );
}
