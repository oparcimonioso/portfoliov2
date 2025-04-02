// components/Header.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`p-4 border-b ${
      isDark ? 'border-gray-800' : 'border-gray-200'
    } flex items-center justify-between`}>
      
      {/* Botão Hamburguer e Título */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-blue-700 dark:hover:bg-gray-700 rounded"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        
        <h1 className="text-xl font-bold">Portfolio: Guilherme Nascimento</h1>
      </div>

      {/* Botão de Tema */}
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-lg ${
          isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
        } transition-colors`}
      >
        {isDark ? '🌞' : '🌙'}
      </button>
    </header>
  );
};

export default Header;