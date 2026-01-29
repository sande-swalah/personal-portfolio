import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/ProjectList.css';


function ProjectList({ projects }) {
  return (
    <div className="projectGrid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
