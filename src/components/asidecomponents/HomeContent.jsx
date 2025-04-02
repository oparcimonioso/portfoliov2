import React, { useState } from 'react';

const HomeContent = () => {
    return (
      <div className="flex flex-col md:flex-row items-center gap-8 min-h-[70vh]">
        {/* Imagem */}
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <img
            src="/public/guilherme.png"
            alt="Guilherme Nascimento"
            className="w-full h-full object-cover rounded-full border-4 border-indigo-50 shadow-xl hover:scale-105 transition-all duration-300"
          />
        </div>
  
        {/* Texto */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Guilherme Nascimento
            <span className="block md:inline-block text-xl md:text-2xl text-gray-500 font-normal mt-2 md:mt-0 md:ml-4">
              (ele/dele)
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl">
            Desenvolvedor Full-Stack | Jornalista especializado em Comunicação e Marketing
            <span className="block text-sm md:text-base text-gray-400 mt-2">
              Transformando ideias em experiências digitais e artísticas
            </span>
          </p>
        </div>
      </div>
    );
};

export default HomeContent;