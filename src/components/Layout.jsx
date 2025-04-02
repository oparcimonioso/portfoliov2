// src/components/Layout.jsx
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';

// src/components/Layout.jsx
export default function Layout({ activeSection, setActiveSection }) {
  const { isDark } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col ${
      isDark ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Aside 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <Main activeSection={activeSection} />
      </div>
      <Footer />
    </div>
  );
}