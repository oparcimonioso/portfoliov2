import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaWhatsapp } from 'react-icons/fa';

const ContactContent = () => {
  const { isDark } = useTheme();

  // Configuração do PDF - Coloque seu arquivo na pasta public/files/cv.pdf
  const cvPdfUrl = '/files/cv.pdf'; // Caminho relativo a partir da pasta public
  
  // Link do WhatsApp - Substitua o número completo (com país e DDD)
  const whatsappUrl = 'https://wa.me/5511999999999';

  return (
    <div className={`max-w-4xl mx-auto p-4 min-h-screen transition-colors duration-300 ${isDark ? 'dark:bg-gray-900' : ''}`}>
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
          Vamos Conversar!
        </h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Entre em contato através das redes sociais ou WhatsApp
        </p>
      </div>

      <div className="flex justify-center">
        <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm w-full max-w-md`}>
          <h2 className={`text-xl font-semibold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
            Conecte-se Comigo
          </h2>
          
          <div className="space-y-4">
            {/* GitHub */}
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

            {/* LinkedIn */}
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

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
                isDark 
                  ? 'hover:bg-gray-700 text-gray-300' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <FaWhatsapp className="w-6 h-6 mr-3 text-green-500" />
              <span>WhatsApp</span>
            </a>

            {/* Email */}
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

            {/* Download do PDF */}
            <a
              href={cvPdfUrl}
              download="/files/curriculoGuilherme.pdf" // Nome do arquivo que será baixado
              className={`w-full flex items-center p-3 rounded-lg transition-colors duration-300 ${
                isDark 
                  ? 'hover:bg-gray-700 text-gray-300' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <FaFileDownload className="w-6 h-6 mr-3 text-green-500" />
              <span>Baixar CV (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;