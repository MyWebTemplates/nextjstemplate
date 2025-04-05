import Header from '@/components/Header';

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#CCFBF1] to-[#BFDBFE]">
            <Header />
            {/* Conteúdo da dashboard vai aqui */}
            <section className="p-8">
                <h2 className="text-2xl font-semibold text-gray-700">Bem-vindo(a) ao Sistema HUOC!</h2>
                {/* Aqui entra o conteúdo das abas, cards, etc. */}
            </section>
        </main>
    );
}
