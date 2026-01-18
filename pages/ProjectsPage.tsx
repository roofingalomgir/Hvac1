
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
     
    </div>
  );
};

export default ProjectsPage;
