
import React from 'react';
import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Provided rapid-response repair services for sudden AC failures',
    category: 'Air Conditioning / Repair',
    image: 'https://picsum.photos/seed/p1/800/600',
  },
  {
    title: 'Diagnosed and repaired cooling issues in split and window',
    category: 'Air Conditioning / Repair',
    image: 'https://picsum.photos/seed/p2/800/600',
  },
  {
    title: 'Performed full system inspections, cleaning and performance',
    category: 'Air Conditioning / Repair',
    image: 'https://picsum.photos/seed/p3/800/600',
  }
];

const ProjectsGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
             <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#031441]">Selected Cases</h2>
          </div>
          <button className="bg-[#031441] text-white px-8 py-4 rounded font-bold hover:bg-accent transition-all flex items-center space-x-2">
            <span>View All Works</span>
            <ArrowRight size={20} className="bg-accent text-white rounded-full p-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl flex flex-col lg:flex-row shadow-lg hover:shadow-2xl transition-all duration-500">
               {/* Content Part (Left) */}
               <div className="bg-white p-12 lg:w-1/3 flex flex-col justify-center relative">
                  <span className="text-accent font-medium text-sm mb-4">{project.category}</span>
                  <h3 className="text-2xl font-bold text-[#031441] mb-6 leading-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-gray-400 text-sm space-y-1 mb-8">
                     <p>Clients: Design Studio in USA</p>
                     <p>Project Type: Digital Product Design</p>
                     <p>Date: 5 January 2025</p>
                     <p>Website: yourdomain.com</p>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
                     <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center -mr-8 shadow-xl transform group-hover:scale-110 transition-transform">
                        <ArrowRight size={32} className="-rotate-45" />
                     </div>
                  </div>
               </div>
               
               {/* Image Part (Right) */}
               <div className="lg:w-2/3 h-[400px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
