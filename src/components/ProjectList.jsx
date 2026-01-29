import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/ProjectList.css';

/**
 * ProjectList Component
 * Displays a grid of project cards
 * Demonstrates component composition and props passing
 */
function ProjectList({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="emptyState">
        <p className="emptyMessage">
          No projects found. Try adjusting your search or add a new project!
        </p>
      </div>
    );
  }

  return (
    <div className="projectGrid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
