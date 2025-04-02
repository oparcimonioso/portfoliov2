import React from 'react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1>Portfolio</h1>
      
      {/* Botão Hamburguer para mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 hover:bg-blue-700 rounded"
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
    </header>
  );
};

export default Header;