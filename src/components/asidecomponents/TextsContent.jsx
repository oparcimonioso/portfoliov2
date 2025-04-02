import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const TextsContent = () => {
  const { isDark } = useTheme();

  return (
    <div className={`max-w-4xl mx-auto p-4 min-h-screen transition-colors duration-300 ${isDark ? 'dark:bg-gray-900' : ''}`}>
      <h1 className={`text-4xl font-bold mb-8 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
        Produção Textual
      </h1>
      
      <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Artigos, ensaios e textos acadêmicos sobre comunicação, tecnologia e sociedade.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Exemplo de texto 1 */}
        <div className={`p-6 rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' 
            : 'bg-white shadow-sm hover:shadow-md'
        }`}>
          <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            A Evolução da Comunicação Digital
          </h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Análise do impacto das redes sociais na formação de opinião pública...
          </p>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <span className="mr-4">📖 12 min de leitura</span>
            <span>📅 Mar 2023</span>
          </div>
        </div>

        {/* Exemplo de texto 2 */}
        <div className={`p-6 rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' 
            : 'bg-white shadow-sm hover:shadow-md'
        }`}>
          <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
            Inteligência Artificial no Jornalismo
          </h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Desafios éticos do uso de ferramentas de IA na produção de conteúdo jornalístico...
          </p>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <span className="mr-4">📖 8 min de leitura</span>
            <span>📅 Jan 2024</span>
          </div>
        </div>

        {/* Espaço para mais textos */}
        <div className={`p-6 rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50 border-2 border-dashed border-gray-700' 
            : 'bg-white shadow-sm hover:shadow-md border-2 border-dashed border-gray-200'
        }`}>
          <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Mais textos em breve...
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextsContent;