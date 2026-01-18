
import React from 'react';
import Services from '../components/Services';
import FAQ from '../components/FAQ';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#031441] text-white py-24 text-center">
        <h1 className="text-6xl font-bold mb-4">Our Premium Services</h1>
        <p className="text-gray-400">Home / Services</p>
      </div>
      <Services />
      <div className="py-24 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {[
           { title: "Residential HVAC", desc: "Expert home cooling and heating solutions for your family's comfort." },
           { title: "Commercial HVAC", desc: "Large scale climate control for offices, warehouses and retail spaces." },
           { title: "Maintenance Plans", desc: "Scheduled checkups to ensure your system never fails when you need it." },
           { title: "Air Quality Control", desc: "Humidifiers, air purifiers and filtration systems for healthy air." },
           { title: "Ductwork Repair", desc: "Efficiency starts with properly sealed and cleaned air ducts." },
           { title: "Emergency Repair", desc: "Fast 24/7 response when your system breaks down unexpectedly." },
         ].map((s, i) => (
           <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-accent transition-all group">
              <h3 className="text-2xl font-bold text-[#031441] mb-4 group-hover:text-accent transition-colors">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
           </div>
         ))}
      </div>
      <FAQ />
    </div>
  );
};

export default ServicesPage;
