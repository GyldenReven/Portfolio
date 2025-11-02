import React from "react";
import type { Project } from "../../types/project.tsx";
import TagCard from "./tag_card.tsx";

import { useTranslation } from "react-i18next";
import ProjectLinks from "./project_links.tsx";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { t } = useTranslation();

    return (
        <a
            className="bg-ctp-base hover:shadow-xl border-2 border-ctp-overlay0 rounded-2xl hover:scale-[1.05] transition-all duration-400 ease-in-out cursor-pointer m-2 hover:border-copper-400 "
            href={`/projects/${project.title}`}
            rel="noopener noreferrer"
        >
            <img
                src={project.thumbnail}
                alt={`${project.title} image`}
                className="w-full h-52 object-cover object-top border-b-2 border-ctp-overlay0 rounded-t-[14px]"
            />
            <div className="flex flex-col gap-2 p-2 h-[calc(100%-208px)]">
                <div className="flex items-center">
                    {project.icon && (
                        <img
                            src={project.icon}
                            alt={`${project.title} icon`}
                            className="w-8 h-8 mb-3 mr-2 rounded-lg"
                        />
                    )}
                    <h2 className="text-lg font-bold pb-1">{project.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <TagCard key={tag.name} tag={tag} />
                    ))}
                </div>
                <p className="text-sm text-ctp-text font-medium mt-2 mb-4">
                    {t(project.description)}
                </p>
                <div className="mt-auto">
                <ProjectLinks project={project} />
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
