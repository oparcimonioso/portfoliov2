import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import SkillsCarousel from './SkillsCarousel';

const DevContent = () => {
  const { isDark } = useTheme();
  const projects = [
    {
      title: "Conectea",
      tech: "HTML + CSS + Boostrap",
      description: "Projeto feito para o curso RECODE PRO AI, com o objetivo de criar um site responsivo. A ideia do site é conectar crianças e adolescentes com Transtorno do Espectro Autista com Instituições Educacionais.",
      link: "https://projeto-squad-60.vercel.app/",
    },
    {
      title: "Nuvem Agência de Viagens",
      tech: "HTML + CSS + Boostrap",
      description: "Projeto feito para o curso RECODE PRO AI, com o objetivo de criar um site responsivo. A ideia do site é criar uma agência de viagens",
      link: "https://nuvem-agencia.vercel.app/",
    },
  ];

  return (
    <div className={`max-w-6xl mx-auto p-4 transition-colors duration-300 ${isDark ? 'dark:bg-gray-900' : ''}`}>
      <div className="flex flex-col items-start gap-4 mb-8">
        <h2 className={`text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
          Guilherme como um Desenvolvedor Full-Stack
        </h2>
        
        <p className={`text-lg max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Sou um desenvolvedor Full-Stack, formado pelo curso RECODE PRO AI. Conheça meus projetos e habilidades:
        </p>

        <a 
          href="https://github.com/oparcimonioso" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`px-6 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md ${
            isDark 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          Meu GitHub
        </a>
      </div>
      
      {/* Carrossel de Habilidades */}
      <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
        Habilidades Técnicas
      </h2>
      <SkillsCarousel />
      <br />

      {/* Cards de Projetos */}
      <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
        Projetos
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-xl transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' 
                : 'bg-white shadow-sm hover:shadow-md'
            }`}
          >
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
              {project.title}
            </h3>
            <p className={`mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description}
            </p>
            <div className="flex items-center justify-between">
              <span className={`text-sm px-3 py-1 rounded-full ${
                isDark 
                  ? 'bg-blue-900/30 text-blue-400' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {project.tech}
              </span>
              <a 
                href={project.link} 
                className={`${
                  isDark 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-600 hover:text-blue-800'
                } transition-colors duration-300`}
              >
                Ver detalhes →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevContent;