import React from "react";
import type { Project } from "../../types/project.tsx";
import TagCard from "./tag_card.tsx";

import { useTranslation } from "react-i18next";
import ProjectReadMe from "./project_readme.tsx";
import ProjectLinks from "./project_links.tsx";

const ProjectSheet: React.FC<{ project: Project }> = ({ project }) => {
    const { t } = useTranslation();

    return (
        <>
            <section>
                <div className="flex flex-row justify-between">
                    <h1 className="mb-4">{t(project.title)}</h1>
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
                <p className="text-ctp-text">{t(project.description)}</p>
                <ProjectLinks project={project} />
            </section>
            {project.githubUrl && (
                <section>
                    <ProjectReadMe />
                </section>
            )}
        </>
    );
};

export default ProjectSheet;
