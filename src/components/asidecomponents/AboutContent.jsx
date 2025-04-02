import React from 'react';

const AboutContent = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Sobre Mim</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card Profissional */}
          <div className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
                <span className="p-2 bg-blue-100 rounded-full">💻</span>
                Profissional
              </h3>
              <p className="text-gray-600 leading-relaxed">
              Jornalista, especializado em Comunicação e Marketing, Mídias Digitais e Redes Sociais. Atualmente,
              estou me tornando um desenvolvedor Full-Stack, com foco em criar experiências digitais que conectam pessoas e ideias.
              Estou buscando meu primeiro emprego na minha área de atuação. Quero aplicar e desenvolver tudo
              que aprendi com meus cursos e buscar meu desenvolvimento profissional e pessoal.
              </p>
            </div>
          </div>
  
          {/* Card Criativo */}
          <div className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
                <span className="p-2 bg-purple-100 rounded-full">😁</span>
                Pessoal
              </h3>
              <p className="text-gray-600 leading-relaxed">
              Sou da Região Metropolitana de Recife, Pernambuco. Tenho {new Date().getFullYear() - 2000} anos
              e sou apaixonado por comunicação. Sou fã de música pop, LGBT+ e uma pessoa cooperativa e criativa.
              Gente massa demais.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card Criativo */}
          <div className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
                <span className="p-2 bg-purple-100 rounded-full">🎓</span>
                Formação
              </h3>
              <div>
              <h4>UNINASSAU</h4>
              <h5>Graduação</h5>
              <p className="text-gray-600 leading-relaxed">Jornalismo</p>
              <p className="text-gray-500">2016 - 2019</p>
              </div>
              <br></br>
              <div>
              <h4>UNINASSAU</h4>
              <h5>Pós-Graduação</h5>
              <p className="text-gray-600 leading-relaxed">Comunicação e Marketing, Mídias Digitais e Redes Sociais</p>
              <p className="text-gray-500">2023 - 2024</p>
              </div>
            </div>
          </div>
  
          {/* Card Profissional */}
          <div className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
                <span className="p-2 bg-blue-100 rounded-full">💼</span>
                Competências
              </h3>
              <ul className="space-y-3 list-disc pl-6 marker:text-blue-400">
              <li className="hover:pl-2 transition-all duration-200">Redação para Web e SEO</li>
              <li className="hover:pl-2 transition-all duration-200">Copywriting</li>
              <li className="hover:pl-2 transition-all duration-200">Marketing Digital</li>
              <li className="hover:pl-2 transition-all duration-200">Gestão de Redes Sociais</li>
              <li className="hover:pl-2 transition-all duration-200">Gestão de Anúncios (Google, Instagram, Facebook Ads)</li>
              <li className="hover:pl-2 transition-all duration-200">Produção de conteúdo visual e audiovisual</li>
            </ul>
            </div>
          </div>
  
        {/* Card Criativo */}
        <div className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
                <span className="p-2 bg-purple-100 rounded-full">✍🏽</span>
                Habilidades
              </h3>
              <ul className="space-y-3 list-disc pl-6 marker:text-blue-400">
              <li className="hover:pl-2 transition-all duration-200">Photoshop</li>
              <li className="hover:pl-2 transition-all duration-200">Illustrator</li>
              <li className="hover:pl-2 transition-all duration-200">InDesign</li>
              <li className="hover:pl-2 transition-all duration-200">Canva</li>
              <li className="hover:pl-2 transition-all duration-200">Capcut</li>
              <li className="hover:pl-2 transition-all duration-200">Pacote Office</li>
              </ul>
          </div>
        </div>
  
        {/* Timeline/CV - Também como card animado */}
        <div className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
              <span className="p-2 bg-gray-100 rounded-full">🌎</span>
              Idiomas
            </h3>
            <ul className="space-y-3 list-disc pl-6 marker:text-blue-400">
              <li className="hover:pl-2 transition-all duration-200">Português</li>
              <li className="hover:pl-2 transition-all duration-200">Inglês - Avançado</li>
              <li className="hover:pl-2 transition-all duration-200">Libras - Avançado</li>
              <li className="hover:pl-2 transition-all duration-200">Espanhol - Básico</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  };

export default AboutContent;