import React from 'react';
import type { Project } from '../../types/project.tsx';
import TagCard from './tag_card.tsx';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <a className="bg-ctp-base hover:shadow-xl border-2 border-ctp-overlay0 rounded-2xl hover:scale-[1.1] transition-all duration-400 ease-in-out cursor-pointer m-2 hover:border-copper-400" 
        href={"#"}
        target="_blank" 
        rel="noopener noreferrer"
    >
        <img src={project.thumbnail} alt={project.title} className="min-w-70 w-full h-32 object-cover mb-2" />
        <div className="flex items-center">
            {project.icon && <img src={project.icon} alt={`${project.title} icon`} className="w-6 h-6 ml-2" />}
            <h2 className="text-lg font-bold m-2">{project.title}</h2>
        </div>
        <div className="flex flex-wrap">
                {project.tags.map((tag) => (
                    <TagCard key={tag.name} tag={tag} />
                ))}
        </div>
        <p className="text-sm text-ctp-text font-medium m-2">{project.description}</p>
    </a>
);

export default ProjectCard;