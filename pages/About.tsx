
import React from 'react';
import AboutSection from '../components/AboutSection';
import Team from '../components/Team';
import Process from '../components/Process';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#031441] text-white py-24 text-center">
        <h1 className="text-6xl font-bold mb-4">About Our Company</h1>
        <p className="text-gray-400">Home / About Us</p>
      </div>
      <AboutSection />
      <Process />
      <Team />
    </div>
  );
};

export default About;
