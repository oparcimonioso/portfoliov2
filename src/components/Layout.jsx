import React, { useState } from 'react';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';

const Layout = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      
      <div className="flex flex-1 relative">
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
};

export default Layout;