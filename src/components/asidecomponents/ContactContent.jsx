import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const ContactContent = () => {
  const { isDark } = useTheme();

  return (
    <div className={`max-w-4xl mx-auto p-4 min-h-screen transition-colors duration-300 ${isDark ? 'dark:bg-gray-900' : ''}`}>
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
          Vamos Conversar!
        </h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Entre em contato através do formulário ou pelas redes sociais
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulário de Contato */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <form className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Nome
              </label>
              <input 
                type="text" 
                className={`w-full p-3 rounded-lg border transition-colors ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 focus:border-blue-400 text-gray-100' 
                    : 'bg-gray-50 border-gray-200 focus:border-blue-500'
                }`}
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Email
              </label>
              <input 
                type="email" 
                className={`w-full p-3 rounded-lg border transition-colors ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 focus:border-blue-400 text-gray-100' 
                    : 'bg-gray-50 border-gray-200 focus:border-blue-500'
                }`}
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Mensagem
              </label>
              <textarea 
                rows="4"
                className={`w-full p-3 rounded-lg border transition-colors ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 focus:border-blue-400 text-gray-100' 
                    : 'bg-gray-50 border-gray-200 focus:border-blue-500'
                }`}
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Redes Sociais e CV */}
        <div className="space-y-6">
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
            <h2 className={`text-xl font-semibold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
              Conecte-se Comigo
            </h2>
            
            <div className="space-y-4">
              <a
                href="https://github.com/oparcimonioso"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
                  isDark 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <FaGithub className="w-6 h-6 mr-3" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/seu-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
                  isDark 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <FaLinkedin className="w-6 h-6 mr-3 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:seuemail@example.com"
                className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
                  isDark 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <FaEnvelope className="w-6 h-6 mr-3 text-red-500" />
                <span>Email</span>
              </a>

              <button
                className={`w-full flex items-center p-3 rounded-lg transition-colors duration-300 ${
                  isDark 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <FaFileDownload className="w-6 h-6 mr-3 text-green-500" />
                <span>Baixar CV (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;