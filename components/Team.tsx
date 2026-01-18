
import React from 'react';
import { ArrowRight } from 'lucide-react';

const TEAM = [
  { name: 'Kevin Brooks', role: 'Installation Supervisor', img: 'https://picsum.photos/seed/t1/400/500' },
  { name: 'Michael Turner', role: 'Installation Supervisor', img: 'https://picsum.photos/seed/t2/400/500' },
  { name: 'Emily Carter', role: 'Senior HVAC Engineer', img: 'https://picsum.photos/seed/t3/400/500' },
  { name: 'Olivia Green', role: 'Lead Technician', img: 'https://picsum.photos/seed/t4/400/500' },
];

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Experts</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#031441] mb-6">The Exceptionals</h2>
            <p className="text-gray-600">
              We understand how crucial a working air conditioner is, especially during those hot summer months. That's why we offer fast, reliable, and affordable repair services.
            </p>
          </div>
          <button className="bg-[#031441] text-white px-8 py-4 rounded font-bold hover:bg-accent transition-all flex items-center space-x-2">
            <span>View All Members</span>
            <ArrowRight size={20} className="bg-accent text-white rounded-full p-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031441]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-[#031441] group-hover:text-accent transition-colors">{member.name}</h4>
                <p className="text-gray-500 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <img 
        src="https://picsum.photos/seed/hvac-bg/500/500" 
        alt="HVAC Decor" 
        className="absolute left-0 bottom-0 w-64 opacity-10 pointer-events-none"
      />
    </section>
  );
};

export default Team;
