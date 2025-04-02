import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Aside = ({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
  const { isDark } = useTheme();
  const menuItems = [
    { key: 'inicio', label: 'Início' },
    { key: 'sobre', label: 'Sobre Mim' },
    { key: 'dev', label: '/DEV' },
    { key: 'textos', label: 'Textos' },
    { key: 'artes', label: 'Artes' },
    { key: 'contato', label: 'Contato' }
  ];

  return (
    <>
      {/* Overlay para mobile */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        ></div>
      )}

      {/* Menu Lateral */}
      <aside
        className={`fixed md:static md:translate-x-0 transform top-0 left-0 w-64 h-full p-4 z-50 transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isDark ? 
            'bg-gray-900 border-r border-gray-800' : 
            'bg-gray-100 border-r border-gray-200'}
        `}
      >
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveSection(item.key);
                setIsMenuOpen(false);
              }}
              className={`w-full text-left p-2 mb-1 rounded transition-colors
                ${activeSection === item.key ?
                  `${isDark ? 'bg-blue-600' : 'bg-blue-500'} text-white` :
                  `${isDark ? 
                    'hover:bg-gray-800 text-gray-300' : 
                    'hover:bg-gray-200 text-gray-700'}`
                }`
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Aside;