
import React, { useState } from 'react';
import { ArrowRight, Settings, Thermometer, ShieldAlert, Wrench } from 'lucide-react';

const SERVICES_DATA = [
  { 
    id: 'ac-install', 
    icon: <Settings />, 
    title: 'AC Installation', 
    image: 'https://airtasker-seo-assets-prod.s3.amazonaws.com/en_US/1742460159447-air-conditioner-installation-cost-hero.jpg',
    detailTitle: 'Professional Cooling System Installation for Home & Office',
    detailDesc: 'Our certified technicians ensure your new AC unit is installed with precision, maximizing energy efficiency and lifespan from day one.',
    features: [
      'Precision Sizing & Unit Selection',
      'Energy Efficiency Optimization',
      'Post-Installation Performance Testing',
      'Full Warranty Support'
    ]
  },
  { 
    id: 'thermostat', 
    icon: <Thermometer />, 
    title: 'Thermostat Install', 
    image: 'https://superiorhomesupplies.com/cdn/shop/articles/diy-thermostat-installation-how-to-choose-and-install-your-thermostat-996447.webp?v=1742622958',
    detailTitle: 'Smart Climate Control for Modern Living Spaces',
    detailDesc: 'Upgrade to smart thermostats that learn your habits and save you money. We handle the wiring and setup of all major smart home brands.',
    features: [
      'Smart Home Integration',
      'Remote Temperature Monitoring',
      'Energy Usage Analytics',
      'Intuitive Scheduling Setup'
    ]
  },
  { 
    id: 'emergency', 
    icon: <ShieldAlert />, 
    title: 'Emergency Repair', 
    image: 'https://www.crisdel.com/wp-content/uploads/2022/04/TYPES-OF-EMERGENCY-REPAIRS.jpg',
    detailTitle: '24/7 Rapid Response for Critical HVAC Failures',
    detailDesc: 'When your AC fails in the peak of summer, every minute counts. Our emergency team is available around the clock to restore your comfort.',
    features: [
      '60-Minute Response Time',
      'Fully Equipped Service Vans',
      'All Major Brands Repaired',
      'Transparent Emergency Pricing'
    ]
  },
  { 
    id: 'maintenance', 
    icon: <Wrench />, 
    title: 'Full Maintenance', 
    image: 'https://qualityheating.com/wp-content/uploads/2023/09/Why-Is-Regular-HVAC-Maintenance-a-Smart-Investment.jpg',
    detailTitle: 'Preventative Care for Peak Seasonal Performance',
    detailDesc: 'Avoid costly breakdowns with our comprehensive maintenance plans. Regular service keeps your energy bills low and air quality high.',
    features: [
      'Comprehensive Multi-Point Inspection',
      'Deep Coil & Filter Cleaning',
      'Refrigerant Level Checks',
      'Priority Scheduling for Members'
    ]
  },
];

const Services: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('ac-install');

  const activeService = SERVICES_DATA.find(s => s.id === activeTabId) || SERVICES_DATA[0];

  return (
    <section className="py-24 bg-[#f8faff] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Service We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#031441] mb-4">What We are Offering</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Tab Selection */}
          <div className="space-y-4">
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTabId(service.id)}
                className={`w-full flex items-center space-x-4 p-6 rounded-xl transition-all duration-300 text-left ${
                  activeTabId === service.id 
                    ? 'bg-[#031441] text-white shadow-xl translate-x-2' 
                    : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-100'
                }`}
              >
                <div className={`p-3 rounded-lg transition-colors ${activeTabId === service.id ? 'bg-accent text-white' : 'bg-blue-50 text-[#031441]'}`}>
                  {/* Fixed: Cast to any to allow size prop in cloneElement to resolve TS error */}
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <span className="font-bold text-lg">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Feature Image */}
          <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl group">
            <img 
              key={activeService.image}
              src={activeService.image} 
              alt={activeService.title} 
              className="w-full h-full object-cover transition-all duration-700 animate-in fade-in zoom-in-95"
            />
            <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Content Detail */}
          <div className="lg:pt-10">
            <div key={activeService.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-3xl font-bold text-[#031441] mb-6 leading-tight">
                {activeService.detailTitle}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {activeService.detailDesc}
              </p>
              <ul className="space-y-4 mb-10">
                {activeService.features.map((text, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-[#031441] font-semibold">
                    <div className="flex-shrink-0 w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center p-1">
                      <ArrowRight size={10} strokeWidth={4} />
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-[#031441] text-white px-8 py-4 rounded font-bold hover:bg-accent transition-all flex items-center space-x-2">
                <span>Discover More</span>
                <ArrowRight size={20} className="bg-accent text-white rounded-full p-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
