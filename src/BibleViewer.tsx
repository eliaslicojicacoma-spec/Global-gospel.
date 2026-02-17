import React from 'react';

const BibleViewer: React.FC = () => {
  return (
    <section id="biblia">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1a2a6c] aspect-[16/10] md:aspect-[16/9]">
        <iframe 
          src="https://www.bible.com/pt/bible/127/GEN.1.ARC" 
          className="w-full h-full border-none"
          title="Online Bible Viewer"
        ></iframe>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        Visualização fornecida pela YouVersion Bible
      </div>
    </section>
  );
};

export default BibleViewer;

