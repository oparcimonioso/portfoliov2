import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ArtsContent = () => {
  const { isDark } = useTheme();

  const artProjects = [
    {
      title: "Abstrato Digital",
      technique: "Ilustração Digital",
      description: "Exploração de formas geométricas e cores vibrantes em composição abstrata",
      tags: ["digital", "abstrato"]
    },
    {
      title: "Retrato Urbano",
      technique: "Fotografia",
      description: "Série fotográfica documentando a vida nas metrópoles contemporâneas",
      tags: ["fotografia", "urbano"]
    },
    {
      title: "Manhã Tropical",
      technique: "Aquarela",
      description: "Paisagem matinal inspirada na vegetação do Nordeste brasileiro",
      tags: ["pintura", "natureza"]
    }
  ];

  return (
    <div className={`max-w-6xl mx-auto p-4 min-h-screen transition-colors duration-300 ${isDark ? 'dark:bg-gray-900' : ''}`}>
      <h1 className={`text-4xl font-bold mb-8 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
        Produção Artística
      </h1>
      
      <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Explorando diferentes técnicas e expressões visuais através da arte digital e tradicional.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artProjects.map((project, index) => (
          <div 
            key={index}
            className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' 
                : 'bg-white shadow-sm hover:shadow-md'
            }`}
          >
            <div className={`h-48 bg-gray-100 transition-colas duration-300 ${
              isDark ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              {/* Placeholder para imagem */}
            </div>
            
            <div className="p-4">
              <h3 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-3 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {project.technique}
              </p>
              <p className={`mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className={`text-xs px-2 py-1 rounded-full ${
                      isDark 
                        ? 'bg-gray-700/50 text-gray-300 border border-gray-600' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Card para novos projetos */}
        <div className={`flex items-center justify-center min-h-[300px] rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50 border-2 border-dashed border-gray-700' 
            : 'bg-white shadow-sm hover:shadow-md border-2 border-dashed border-gray-200'
        }`}>
          <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Novos projetos em desenvolvimento...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtsContent;