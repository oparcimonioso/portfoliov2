import React from 'react';
import HomeContent from './asidecomponents/HomeContent';
import AboutContent from './asidecomponents/AboutContent';
import DevContent from './asidecomponents/DevContent';
import TextsContent from './asidecomponents/TextsContent';
import ArtsContent from './asidecomponents/ArtsContent';
import ContactContent from './asidecomponents/ContactContent';

const Main = ({ activeSection }) => {
  const renderContent = () => {
    switch(activeSection) {
      case 'inicio':
        return <HomeContent />;
      case 'sobre':
        return <AboutContent />;
      case 'dev':
        return <DevContent />;
      case 'textos':
        return <TextsContent />;
      case 'artes':
        return <ArtsContent />;
      case 'contato':
        return <ContactContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {renderContent()}
      </div>
    </main>
  );
};

export default Main;