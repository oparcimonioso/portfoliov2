import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const HomeContent = () => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 min-h-[70vh] p-4">
      {/* Imagem */}
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        <img
          src="/images/guilherme.jpg"
          alt="Guilherme Nascimento"
          className={`w-full h-full object-cover rounded-full border-4 shadow-xl hover:scale-105 transition-all duration-300 ${
            isDark 
              ? 'border-gray-800 hover:border-gray-700' 
              : 'border-indigo-50 hover:border-indigo-100'
          }`}
        />
      </div>

      {/* Texto */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Guilherme Nascimento
          <span className={`block md:inline-block text-xl md:text-2xl font-normal mt-2 md:mt-0 md:ml-4 ${
            isDark ? 'text-gray-300' : 'text-gray-500'
          }`}>
            (ele/dele)
          </span>
        </h1>
        
        <div className="space-y-2">
          <p className={`text-lg md:text-2xl max-w-2xl transition-colors ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Desenvolvedor Full-Stack | Jornalista especializado em Comunicação e Marketing
          </p>
          <p className={`text-sm md:text-base ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Transformando ideias em experiências digitais e artísticas
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;