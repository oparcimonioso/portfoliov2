import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const AboutContent = () => {
  const { isDark } = useTheme();

  return (
    <div className={`max-w-4xl mx-auto p-4 transition-colors duration-300 ${isDark ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>
      <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Sobre Mim</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Card Profissional */}
        <div className={`group relative p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 
          ${isDark ? 
            'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' : 
            'bg-white shadow-sm hover:shadow-md'}`}>
          <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            ${isDark ? 
              'bg-gradient-to-r from-gray-700/30 to-purple-900/30' : 
              'bg-gradient-to-r from-blue-50 to-purple-50'}`}></div>
          <div className="relative z-10">
            <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 
              ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              <span className={`p-2 rounded-full ${isDark ? 'bg-gray-700/20' : 'bg-blue-100'}`}>💻</span>
              Profissional
            </h3>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Jornalista, especializado em Comunicação e Marketing, Mídias Digitais e Redes Sociais. Atualmente,
              estou me tornando um desenvolvedor Full-Stack, com foco em criar experiências digitais que conectam pessoas e ideias.
              Estou buscando meu primeiro emprego na minha área de atuação. Quero aplicar e desenvolver tudo
              que aprendi com meus cursos e buscar meu desenvolvimento profissional e pessoal.
            </p>
          </div>
        </div>

        {/* Card Pessoal */}
        <div className={`group relative p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 
          ${isDark ? 
            'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' : 
            'bg-white shadow-sm hover:shadow-md'}`}>
          <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            ${isDark ? 
              'bg-gradient-to-r from-purple-900/30 to-pink-900/30' : 
              'bg-gradient-to-r from-purple-50 to-pink-50'}`}></div>
          <div className="relative z-10">
            <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 
              ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              <span className={`p-2 rounded-full ${isDark ? 'bg-gray-700/20' : 'bg-purple-100'}`}>😁</span>
              Pessoal
            </h3>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Sou da Região Metropolitana de Recife, Pernambuco. Tenho {new Date().getFullYear() - 2000} anos
              e sou apaixonado por comunicação. Sou fã de música pop, LGBT+ e uma pessoa cooperativa e criativa.
              Gente massa demais.
            </p>
          </div>
        </div>
      </div>

      <br />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card Formação */}
        <div className={`group relative p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 
          ${isDark ? 
            'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' : 
            'bg-white shadow-sm hover:shadow-md'}`}>
          <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            ${isDark ? 
              'bg-gradient-to-r from-purple-900/30 to-pink-900/30' : 
              'bg-gradient-to-r from-purple-50 to-pink-50'}`}></div>
          <div className="relative z-10">
            <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 
              ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              <span className={`p-2 rounded-full ${isDark ? 'bg-gray-700/20' : 'bg-purple-100'}`}>🎓</span>
              Formação
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>UNINASSAU</h4>
                <h5 className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Graduação</h5>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Jornalismo</p>
                <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>2016 - 2019</p>
              </div>
              <div>
                <h4 className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>UNINASSAU</h4>
                <h5 className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Pós-Graduação</h5>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Comunicação e Marketing, Mídias Digitais e Redes Sociais</p>
                <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>2023 - 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Competências */}
        <div className={`group relative p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 
          ${isDark ? 
            'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' : 
            'bg-white shadow-sm hover:shadow-md'}`}>
          <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            ${isDark ? 
              'bg-gradient-to-r from-gray-700/30 to-blue-900/30' : 
              'bg-gradient-to-r from-blue-50 to-purple-50'}`}></div>
          <div className="relative z-10">
            <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 
              ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              <span className={`p-2 rounded-full ${isDark ? 'bg-gray-700/20' : 'bg-blue-100'}`}>💼</span>
              Competências
            </h3>
            <ul className={`space-y-3 pl-6 list-disc ${isDark ? 'marker:text-blue-500' : 'marker:text-blue-400'}`}>
              {['Redação para Web e SEO', 'Copywriting', 'Marketing Digital', 'Gestão de Redes Sociais', 
              'Gestão de Anúncios (Google, Instagram, Facebook Ads)', 'Produção de conteúdo visual e audiovisual']
              .map((item, index) => (
                <li key={index} className={`hover:pl-2 transition-all duration-200 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Habilidades */}
        <div className={`group relative p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 
          ${isDark ? 
            'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' : 
            'bg-white shadow-sm hover:shadow-md'}`}>
          <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            ${isDark ? 
              'bg-gradient-to-r from-purple-900/30 to-pink-900/30' : 
              'bg-gradient-to-r from-purple-50 to-pink-50'}`}></div>
          <div className="relative z-10">
            <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 
              ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              <span className={`p-2 rounded-full ${isDark ? 'bg-gray-700/20' : 'bg-purple-100'}`}>✍🏽</span>
              Habilidades
            </h3>
            <ul className={`space-y-3 pl-6 list-disc ${isDark ? 'marker:text-blue-500' : 'marker:text-blue-400'}`}>
              {['Photoshop', 'Illustrator', 'InDesign', 'Canva', 'Capcut', 'Pacote Office']
              .map((item, index) => (
                <li key={index} className={`hover:pl-2 transition-all duration-200 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Idiomas */}
        <div className={`group relative p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 
          ${isDark ? 
            'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' : 
            'bg-white shadow-sm hover:shadow-md'}`}>
          <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            ${isDark ? 
              'bg-gradient-to-r from-purple-900/30 to-pink-900/30' : 
              'bg-gradient-to-r from-purple-50 to-pink-50'}`}></div>
          <div className="relative z-10">
            <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 
              ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              <span className={`p-2 rounded-full ${isDark ? 'bg-gray-700/20' : 'bg-gray-100'}`}>🌎</span>
              Idiomas
            </h3>
            <ul className={`space-y-3 pl-6 list-disc ${isDark ? 'marker:text-blue-500' : 'marker:text-blue-400'}`}>
              {['Português', 'Inglês - Avançado', 'Libras - Avançado', 'Espanhol - Básico']
              .map((item, index) => (
                <li key={index} className={`hover:pl-2 transition-all duration-200 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;