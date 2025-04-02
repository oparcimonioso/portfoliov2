import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`p-4 text-center transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-800 border-t border-gray-700 text-gray-300' 
        : 'bg-blue-600 border-t border-gray-200 text-white'
    }`}>
      <p className="text-sm">
        Guilherme Nascimento. Todos os direitos reservados © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;