import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { DiHtml5, DiCss3, DiBootstrap, DiJavascript, DiReact, DiAngularSimple, DiNodejs, DiDatabase, DiMongodb, DiPython, DiJava, DiLinux } from 'react-icons/di';
import { SiPandas } from 'react-icons/si';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SkillsCarousel = () => {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState({ left: false, right: true });
  const skills = [
    { name: 'HTML', icon: <DiHtml5 />, learned: true },
    { name: 'CSS', icon: <DiCss3 />, learned: true },
    { name: 'Bootstrap', icon: <DiBootstrap />, learned: true },
    { name: 'JavaScript', icon: <DiJavascript />, learned: true },
    { name: 'ReactJs', icon: <DiReact />, learned: true },
    { name: 'AngularJs', icon: <DiAngularSimple />, learned: false },
    { name: 'Node.js', icon: <DiNodejs />, learned: true },
    { name: 'SQL', icon: <DiDatabase />, learned: true },
    { name: 'NoSQL', icon: <DiMongodb />, learned: false },
    { name: 'Python', icon: <DiPython />, learned: true },
    { name: 'Pandas', icon: <SiPandas />, learned: true },
    { name: 'Java', icon: <DiJava />, learned: false },
    { name: 'Linux', icon: <DiLinux />, learned: false }
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowArrows({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth
      });
    }
  };

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;
    
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 500);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <div className="relative group overflow-hidden py-8">
      {/* Botões de navegação */}
      <button 
        onClick={() => handleScroll('left')}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all ${
          !showArrows.left ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <FiChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      
      <button 
        onClick={() => handleScroll('right')}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all ${
          !showArrows.right ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <FiChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Carrossel */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar gap-8 px-4 scroll-smooth"
        onScroll={checkScroll}
      >
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex flex-col items-center shrink-0 transition-all duration-300 hover:scale-105"
          >
            <div className={`
              w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center
              border-2 ${skill.learned ? 'border-gray-100' : 'border-dashed border-gray-200'}
              ${!skill.learned && 'grayscale opacity-50'}
            `}>
              <span className={`text-4xl ${skill.learned ? 'text-blue-500' : 'text-gray-300'}`}>
                {skill.icon}
              </span>
            </div>
            <span className={`mt-2 text-sm font-medium ${skill.learned ? 'text-gray-700' : 'text-gray-400'}`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default SkillsCarousel;