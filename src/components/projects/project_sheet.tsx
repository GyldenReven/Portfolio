import React from "react";
import type { Project } from "../../types/project.tsx";
import TagCard from "./tag_card.tsx";

import { useTranslation } from "react-i18next";
import ProjectReadMe from "./project_readme.tsx";
import ProjectLinks from "./project_links.tsx";

const ProjectSheet: React.FC<{ project: Project }> = ({ project }) => {
    const { t } = useTranslation();

    return (
        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            <section>
                <div className="flex flex-row justify-between align-center">
                    <div className="flex flex-row gap-4 items-center mb-4">
                        {project.icon && (
                            <img
                                src={project.icon}
                                alt={`${project.title} icon`}
                                className="w-16 h-16 rounded-lg"
                            />
                        )}
                        <h1 className="pt-4">{t(project.title)}</h1>
                    </div>
                    <a
                        href={"/projects"}
                        className="text-ctp-text font-bold border-2 bg-ctp-surface1 border-ctp-overlay0 rounded-lg p-2 hover:border-copper-400 hover:text-copper-300 transition-all duration-300 ease-in-out w-10 h-10 justify-center items-center flex hover:scale-120"
                    >
                        &larr;
                    </a>
                </div>
                <div className="flex flex-wrap mb-4 gap-2">
                    {project.tags.map((tag) => (
                        <TagCard key={tag.name} tag={tag} />
                    ))}
                </div>
                <div className="flex flex-row">
                    <p className="text-ctp-text mb-4">
                        {t(project.description)}
                    </p>
                </div>
                <ProjectLinks project={project} />
            </section>
            {project.githubUrl && (
                <section>
                    <ProjectReadMe projectName={project.title} />
                </section>
            )}
            <img
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                className="m-[10px_auto] max-h-3/5 rounded-lg object-cover object-top md:col-2 md:row-start-1 md:row-end-3 border-2 border-ctp-overlay0"
            />
        </div>
    );
};

export default ProjectSheet;
