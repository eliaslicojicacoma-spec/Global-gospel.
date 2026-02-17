import React from 'react';
import { Cross, BookOpen, Globe } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="missao" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a2a6c] mb-4">Nossa Missão</h2>
          <div className="w-20 h-1 bg-[#b21f1f] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-gray-700 italic border-l-4 border-[#fdbb2d] pl-6 bg-white p-6 rounded-r-lg shadow-sm">
              "Este ministério dedica-se à proclamação das três mensagens angélicas, fortalecendo a fé através do estudo profundo das profecias e da verdade bíblica, preparando um povo para o breve retorno de Jesus Cristo."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#1a2a6c]">
                <Cross size={32} className="text-[#1a2a6c] mb-3" />
                <h4 className="font-bold text-lg mb-2">Mensagem Profética</h4>
                <p className="text-gray-600 text-sm">Explicação das profecias bíblicas para os tempos atuais.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#b21f1f]">
                <BookOpen size={32} className="text-[#b21f1f] mb-3" />
                <h4 className="font-bold text-lg mb-2">Educação Bíblica</h4>
                <p className="text-gray-600 text-sm">Aprofundamento teológico fundamentado na Sola Scriptura.</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1544427928-142ca2aa472d?q=80" 
               alt="Study" 
               className="aspect-square rounded-3xl overflow-hidden shadow-2xl object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

