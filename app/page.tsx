export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#4b2c6d] font-sans selection:bg-[#7e57c2] selection:text-white">
      {/* Header / Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4b2c6d] to-[#6a1b9a] py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-8 bg-[#ffffff20] backdrop-blur-md rounded-full text-sm font-semibold tracking-wide uppercase">
            Comitê Olímpico do Brasil
          </div>
          
          {/* Imagem Adicionada no Primeiro Scroll */}
          <div className="w-full max-w-2xl mb-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ffffff20]">
            <img 
              src="https://images.libero.fengbrasil.com.br/uploads/LP_CONFIRMACAO_jpg_1773348470401_eouime.jpg" 
              alt="III Fórum Mulheres no Esporte COB"
              className="w-full h-auto object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            III Fórum Mulheres no Esporte COB
          </h1>
          <p className="text-lg md:text-xl mb-10 text-[#e1bee7] max-w-2xl mx-auto">
            Um encontro estratégico para fortalecer a presença e o protagonismo feminino no cenário esportivo nacional.
          </p>
          <a
            href="#confirmacao"
            className="inline-block bg-[#ffffff] text-[#4b2c6d] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#f3e5f5] transition-all transform hover:-translate-y-1"
          >
            Confirmar Presença →
          </a>
        </div>
        {/* Elemento decorativo */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#ffffff10] rounded-full blur-3xl"></div>
      </section>

      {/* Informações do Evento */}
      <section className="py-20 px-6 bg-[#f8f5fb]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Informações do Evento</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#ede7f6] text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-bold text-xl mb-2">Local</h3>
              <p className="text-[#6a1b9a]">Centro de Treinamento do COB<br />Rio de Janeiro - RJ</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#ede7f6] text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-bold text-xl mb-2">Data</h3>
              <p className="text-[#6a1b9a]">25 de Outubro de 2024</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#ede7f6] text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-bold text-xl mb-2">Horário</h3>
              <p className="text-[#6a1b9a]">Das 09:00 às 18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Confirmação */}
      <section id="confirmacao" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-[#ede7f6] overflow-hidden">
            <div className="bg-[#4b2c6d] p-8 text-white text-center">
              <h2 className="text-3xl font-bold">Formulário de Confirmação</h2>
              <p className="mt-2 opacity-90">Preencha os dados abaixo para garantir sua vaga.</p>
            </div>
            <form
              action="https://formspree.io/f/xgolqabd"
              method="POST"
              className="p-8 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[#4b2c6d]">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-[#d1c4e9] rounded-xl focus:ring-2 focus:ring-[#7e57c2] focus:border-transparent outline-none transition-all"
                  placeholder="Digite seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#4b2c6d]">E-mail Profissional</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-[#d1c4e9] rounded-xl focus:ring-2 focus:ring-[#7e57c2] focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="org" className="block text-sm font-semibold mb-2 text-[#4b2c6d]">Organização / Entidade</label>
                <input
                  type="text"
                  name="org"
                  id="org"
                  required
                  className="w-full px-4 py-3 border border-[#d1c4e9] rounded-xl focus:ring-2 focus:ring-[#7e57c2] focus:border-transparent outline-none transition-all"
                  placeholder="Nome da sua organização"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#4b2c6d] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#6a1b9a] transition-all transform active:scale-[0.98]"
              >
                Enviar Confirmação ✓
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[#ede7f6] text-center text-sm text-[#9575cd]">
        <p>© 2024 Comitê Olímpico do Brasil. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}