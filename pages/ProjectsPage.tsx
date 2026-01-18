
import React from 'react';
import ProjectsGrid from '../components/ProjectsGrid';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#031441] text-white py-24 text-center">
        <h1 className="text-6xl font-bold mb-4">Case Studies</h1>
        <p className="text-gray-400">Home / Projects</p>
      </div>
      <ProjectsGrid />
      <div className="container mx-auto px-4 pb-24 text-center">
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">We take pride in our precision and dedication to every project, whether it's a small residential repair or a massive industrial installation.</p>
        <button className="bg-accent text-white px-12 py-5 rounded-full font-bold hover:bg-[#031441] transition-all">LOAD MORE PROJECTS</button>
      </div>
    </div>
  );
};

export default ProjectsPage;
