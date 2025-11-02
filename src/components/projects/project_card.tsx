import React from "react";
import type { Project } from "../../types/project.tsx";
import TagCard from "./tag_card.tsx";

import { useTranslation } from "react-i18next";
import ProjectLinks from "./project_links.tsx";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { t } = useTranslation();

    return (
        <a
            className="bg-ctp-base hover:shadow-xl border-2 border-ctp-overlay0 rounded-2xl hover:scale-[1.1] transition-all duration-400 ease-in-out cursor-pointer m-2 hover:border-copper-400 "
            href={`/projects/${project.title}`}
            rel="noopener noreferrer"
        >
            <img
                src={project.thumbnail}
                alt={t(project.title)}
                className="w-full h-32 object-cover mb-2"
            />
            <div className="flex flex-col gap-2 p-2">
                <div className="flex items-center">
                    {project.icon && (
                        <img
                            src={project.icon}
                            alt={`${t(project.title)} icon`}
                            className="w-6 h-6"
                        />
                    )}
                    <h2 className="text-lg font-bold">{t(project.title)}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <TagCard key={tag.name} tag={tag} />
                    ))}
                </div>
                <p className="text-sm text-ctp-text font-medium mt-2 mb-4">
                    {t(project.description)}
                </p>
                <ProjectLinks project={project} />
            </div>
        </a>
    );
};

export default ProjectCard;
