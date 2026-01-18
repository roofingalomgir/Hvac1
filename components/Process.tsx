
import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Get A Quote',
    desc: 'But I Must Explain To You How All This Mistaken Idea Of Denouncing Pleasure And Praising Pain Was Born And I Will Give You C But I Must Explain'
  },
  {
    num: '02',
    title: 'Fix Or Install',
    desc: 'But I Must Explain To You How All This Mistaken Idea Of Denouncing Pleasure And Praising Pain Was Born And I Will Give You C But I Must Explain'
  },
  {
    num: '03',
    title: 'Enjoy Cool Comfort',
    desc: 'But I Must Explain To You How All This Mistaken Idea Of Denouncing Pleasure And Praising Pain Was Born And I Will Give You C But I Must Explain'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-[#031441] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block border border-white/20 px-6 py-2 rounded-full mb-6">
            <span className="uppercase text-xs font-bold tracking-widest">How It Works</span>
          </div>
          <h2 className="text-5xl font-bold">Shaping the Future</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {STEPS.map((step) => (
              <div key={step.num} className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-md">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/process/800/1000" 
              alt="Technician consultation" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-accent/10 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
