import React from 'react';

const Aside = ({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
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
        className={`fixed md:static md:translate-x-0 transform top-0 left-0 w-64 h-full bg-gray-100 p-4 z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveSection(item.key);
                setIsMenuOpen(false);
              }}
              className={`w-full text-left p-2 mb-1 rounded ${
                activeSection === item.key
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200'
              }`}
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