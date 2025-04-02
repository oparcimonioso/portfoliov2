import React from 'react';
import SkillsCarousel from './SkillsCarousel';

const DevContent = () => {
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
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Guilherme como um Desenvolvedor Full-Stack
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl">
          Sou um desenvolvedor Full-Stack, formado pelo curso RECODE PRO AI. Conheça meus projetos e habilidades:
        </p>
  
        <a 
          href="https://github.com/oparcimonioso" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
        >
          Meu GitHub
        </a>
        </div>
        
        {/* Carrossel de Habilidades */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Habilidades Técnicas</h2>
        <SkillsCarousel />
        <br></br>

        {/* Cards de Projetos */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Projetos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {project.tech}
                </span>
                <a href={project.link} className="text-blue-600 hover:underline">
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