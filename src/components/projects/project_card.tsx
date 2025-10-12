import React from 'react';
import type { Project } from '../../types/project.tsx';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="border-2 border-ctp-overlay1 rounded-2xl">
        <img src={project.thumbnail} alt={project.title} className="min-w-70 w-full h-32 object-cover mb-2" />
        <div className="flex items-center">
            {project.icon && <img src={project.icon} alt={`${project.title} icon`} className="w-6 h-6 ml-2" />}
            <h2 className="text-lg font-bold m-2">{project.title}</h2>
        </div>
        <p className="text-sm text-ctp-subtext1 m-2">{project.description}</p>
    </div>
);

export default ProjectCard;