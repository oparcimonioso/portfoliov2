import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const TextsContent = () => {
  const { isDark } = useTheme();

  return (
    <div className={`max-w-4xl mx-auto p-4 min-h-screen transition-colors duration-300 ${isDark ? 'dark:bg-gray-900' : ''}`}>
      <h1 className={`text-4xl font-bold mb-8 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
        Produção Textual
      </h1>
      
      <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Artigos, ensaios e textos acadêmicos sobre comunicação, tecnologia e sociedade.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Exemplo de texto 1 */}
        <div className={`p-6 rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' 
            : 'bg-white shadow-sm hover:shadow-md'
        }`}>
          <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
          Ao lado de outros artistas, Marina Sena vai ao Senado defender os direitos autorais e a regulamentação da Inteligência Artificial.
          </h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Ontem (10), Marina Sena, junto a nomes como Paula Lavigne, Paula Fernandes e diversos outros artistas, uniram forças no Senado Federal para fomentar o debate sobre os direitos autorais e a regulamentação da inteligência artificial no Brasil.</p>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Em uma reunião com o presidente do Senado, Rodrigo Pacheco (PSD-MG), os artistas pressionaram para que a regulamentação da inteligência artificial também inclua o uso de direitos autorais, preservando a propriedade intelectual dos artistas.</p>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          “O Senado acatou o nosso pedido e manteve a exigência de que as grandes empresas de tecnologia informem, já no treinamento dos sistemas de IA, quais conteúdos protegidos foram usados”, escreveu Michael Sullivan em uma publicação em sua rede social.</p>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          O projeto de regulamentação da IA no Brasil estabelece os riscos e os direitos sobre o uso e o desenvolvimento dessa tecnologia no país. Ele foi aprovado na semana passada e agora segue em debate no plenário.</p>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <span className="mr-4"></span>
            <span></span>
          </div>
        </div>

        {/* Exemplo de texto 2 */}
        <div className={`p-6 rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' 
            : 'bg-white shadow-sm hover:shadow-md'
        }`}>
          <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
          Desfile cívico encerra a Semana da Pátria neste domingo (09), em Jussaral
          </h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          “Do conhecimento que liberta ao amor que educa”. Essa frase foi o tema da Semana da Pátria, no Cabo de Santo Agostinho, que se encerrou nesse domingo (09/09), em Jussaral, com o desfile cívico. O evento, que iniciou às 15h, contou com apresentações de 9 escolas e instituições do município.</p>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Com a presença do vice-prefeito Keko do Armazém e outros secretários, o desfile renovou a celebração e o patriotismo dos moradores do distrito, que se reuniram na praça para assistir.</p>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          A celebração começou com a Escola Municipal de Música José Ladislau Pimentel, fundada há 42 anos, que mostrou uma ótima performance e animou o público.</p>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Também houve a apresentação da Escola Municipal Antônio Lima da Silva do Engenho Arariba da Pedra, acompanhada da Banda Marcial Aristheu Figueirêdo, que apresentou o tema “Nordeste” com alunos caracterizados como Lampião e Maria Bonita.</p>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          A Secretaria de Programas Sociais marcou presença com sua passeata, acompanhada da Banda Mirim Mayrê Gabriella, e os idosos de Jussaral participaram da “Capoterapia”, realizada pelo CRAS do distrito.</p>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <span className="mr-4"></span>
            <span></span>
          </div>
        </div>

        {/* Exemplo de texto 2 */}
        <div className={`p-6 rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' 
            : 'bg-white shadow-sm hover:shadow-md'
        }`}>
          <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
          Governo Presente leva ações para a Cohab.
          </h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Neste sábado (25/05), a Escola José Rodrigues de Carvalho, na rua 52 – bairro da Cohab, recebeu o programa Governo Presente, realizado com o apoio da Prefeitura do Cabo. Foram ofertados serviços como emissão de 2ª via de certidão, casamento, óbito, RG, CPF, Detran, Vem Livre, orientação jurídica, negociação de débitos, habilitação para casamento, exames e outros.</p>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Os portões abriram às 8h e diversas pessoas compareceram. A Secretaria Municipal também ofertou atendimentos para idosos e pessoas com deficiência, informações sobre Acessuas, bolsa família, atividades do programa Bola pro Alto, além de vacinação, consultas e testes de sífilis e HIV.</p>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Dona Josefa, que acordou cedo para negociar débitos com a Compesa, destacou a praticidade do programa. O prefeito em exercício, Keko do Armazém, esteve presente e ressaltou o apoio e a estrutura oferecidos. O serviço mais procurado foi a emissão da 2ª via do RG, atendendo cerca de 200 pessoas.</p>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <span className="mr-4"></span>
            <span></span>
          </div>
        </div>

        {/* Exemplo de texto 2 */}
        <div className={`p-6 rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50' 
            : 'bg-white shadow-sm hover:shadow-md'
        }`}>
          <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
          Charli XCX anuncia novo single para setembro
          </h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Comemorando seu aniversário, a cantora e produtora Charli XCX anunciou que lançará o single “Good Ones” em 2 de setembro. O lançamento marca a volta da artista aos projetos após o ano passado.</p>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Conhecida por disseminar o PC Music e por sucessos como “Boom Clap” e “Fancy”, Charli XCX tem álbuns aclamados pela crítica, como “How I Feeling Now” (2020) e “Charli” (2019). Você pode fazer o pre‑save do single Good Ones através do link disponível.</p>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <span className="mr-4"></span>
            <span></span>
          </div>
        </div>

        {/* Espaço para mais textos */}
        <div className={`p-6 rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-800/50 border-2 border-dashed border-gray-700' 
            : 'bg-white shadow-sm hover:shadow-md border-2 border-dashed border-gray-200'
        }`}>
          <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Mais textos em breve...
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextsContent;