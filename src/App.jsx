// src/App.jsx
import React from 'react';
import { useState } from 'react';
import Layout from './components/Layout';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <Layout 
      activeSection={activeSection}
      setActiveSection={setActiveSection}
    />
  );
}

export default App;