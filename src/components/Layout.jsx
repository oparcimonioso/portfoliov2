import React, { useState } from 'react';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';

const Layout = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Aside activeSection={activeSection} setActiveSection={setActiveSection} />
        <Main activeSection={activeSection} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;