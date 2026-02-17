import React from 'react';
import { Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-6 tracking-wider">
            Global <span className="text-[#fdbb2d]">Gospel</span>
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Um ministério dedicado à luz do Evangelho Eterno e ao despertar espiritual.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#fdbb2d]">Links Rápidos</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
            <li><a href="#missao" className="hover:text-white transition-colors">Nossa Missão</a></li>
            <li><a href="#biblioteca" className="hover:text-white transition-colors">Recursos de Estudo</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#fdbb2d]">Localização</h4>
          <p className="text-gray-400 text-sm mb-2">Lubango, Huíla</p>
          <p className="text-gray-400 text-sm italic">Angola</p>
          <div className="mt-6 flex gap-4">
             <a href="mailto:eliaslicojicacoma@gmail.com" className="text-gray-400 hover:text-[#fdbb2d] transition-colors">
               <Mail size={20} />
             </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
        <p>© {currentYear} Global Gospel | Todos os direitos reservados.</p>
        <p className="mt-4 md:mt-0 font-medium text-[#fdbb2d]">Soli Deo Gloria</p>
      </div>
    </footer>
  );
};

export default Footer;

