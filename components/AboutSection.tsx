
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

type TabId = 'about' | 'mission' | 'vision';

const TAB_CONTENT = {
  about: {
    italic: "We are a dedicated team of HVAC professionals with over 25 years of experience in providing top-tier cooling and heating solutions.",
    features: [
      'Expert Technicians Our team is highly trained and experienced',
      'Prompt Service We value your time so we offer quick response',
      'Affordable Rates We believe that quality AC repair'
    ]
  },
  mission: {
    italic: "Our mission is to provide every household with reliable, energy-efficient comfort solutions through technical excellence and integrity.",
    features: [
      'Customer-First Approach putting your comfort at the top',
      'Sustainability Focus using eco-friendly refrigerants',
      'Integrity in Pricing no hidden costs, just honest work'
    ]
  },
  vision: {
    italic: "To be the most trusted HVAC service provider in the region, recognized for our innovation and commitment to customer satisfaction.",
    features: [
      'Innovation in Cooling leading the way with smart tech',
      'Community Growth supporting local infrastructure',
      'Excellence in Service setting the industry gold standard'
    ]
  }
};

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('about');

  const currentContent = TAB_CONTENT[activeTab];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Images */}
          <div className="relative">
            <div className="relative z-10 w-[85%]">
              <img 
                src="https://www.airsouthnow.com/blog/wp-content/uploads/2024/04/AC-repair.jpeg" 
                alt="HVAC Technician" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-0 z-20 w-[60%] border-8 border-white rounded-xl shadow-xl">
              <img 
                src="https://lionshvac.com/wp-content/uploads/2022/02/Commercial-Air-Conditioner-Repair-Los-Angeles-Mobile.jpg" 
                alt="HVAC Unit" 
                className="rounded-lg"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 bg-white shadow-lg p-6 rounded-xl flex items-center space-x-4 rotate-[-90deg]">
              <span className="text-5xl font-extrabold text-[#031441]">25</span>
              <div className="flex flex-col leading-none">
                <span className="text-accent font-bold">Years of</span>
                <span className="text-[#031441] font-bold">Experience</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:pl-10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#031441] mb-8 leading-tight">
              Dedicated our Efficient Services
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We understand how crucial a working air conditioner is, especially during those hot summer months. That's why we offer fast, reliable, and affordable repair services to get your AC back up and running efficiently.
            </p>

            <div className="flex space-x-8 mb-10 border-b">
               <button 
                  onClick={() => setActiveTab('about')}
                  className={`font-bold transition-all pb-4 ${activeTab === 'about' ? 'text-[#031441] border-b-2 border-accent' : 'text-gray-400 hover:text-[#031441]'}`}
               >
                 ABOUT US
               </button>
               <button 
                  onClick={() => setActiveTab('mission')}
                  className={`font-bold transition-all pb-4 ${activeTab === 'mission' ? 'text-[#031441] border-b-2 border-accent' : 'text-gray-400 hover:text-[#031441]'}`}
               >
                 OUR MISSION
               </button>
               <button 
                  onClick={() => setActiveTab('vision')}
                  className={`font-bold transition-all pb-4 ${activeTab === 'vision' ? 'text-[#031441] border-b-2 border-accent' : 'text-gray-400 hover:text-[#031441]'}`}
               >
                 OUR VISION
               </button>
            </div>

            <div className="min-h-[220px]">
              <p className="text-gray-500 italic mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
                {currentContent.italic}
              </p>

              <ul className="space-y-4 mb-10">
                {currentContent.features.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 group animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-[#031441] font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-[#031441] text-white px-8 py-4 rounded font-bold hover:bg-accent transition-all flex items-center space-x-2">
              <span>Discover More</span>
              <ArrowRight size={20} className="bg-accent text-white rounded-full p-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
