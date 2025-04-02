import React from 'react';
const Aside = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { key: 'inicio', label: 'Início' },
    { key: 'sobre', label: 'Sobre Mim' },
    { key: 'dev', label: '/DEV' },
    { key: 'textos', label: 'Textos' },
    { key: 'artes', label: 'Artes' },
    { key: 'contato', label: 'Contato' }
  ];

  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveSection(item.key)}
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
  );
};

export default Aside;