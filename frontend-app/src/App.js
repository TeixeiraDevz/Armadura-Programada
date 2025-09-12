import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <h1>Armadura Programada</h1>
      <p>Bem-vindo à plataforma!</p>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<div style={{padding:24,color:'#fff'}}>Página não encontrada</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
