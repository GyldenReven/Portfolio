import { Routes, Route } from "react-router-dom";
import ProjectCard from "../components/projects/project_card";
import { projects } from "../types/project";

import { useTranslation } from "react-i18next";
import Page404 from "./page404";
import ProjectSheet from "../components/projects/project_sheet";

function ProjectsPage() {
    const { t } = useTranslation();

    return (
            <Routes>
                <Route
                    path="/"
                    element={
                        <section className="projects-section mx-auto my-8 px-4 flex flex-col gap-6">
                            <h1>{t("projects.title")}</h1>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {projects.map((project) => (
                                    <ProjectCard project={project} />
                                ))}
                            </div>
                        </section>
                    }
                />
                {projects.map((project) => (
                    <Route
                        path={`/${project.title}`}
                        element={<ProjectSheet project={project} />}
                    />
                ))}
                <Route path="*" element={<Page404 />} />
            </Routes>
    );
}

export default ProjectsPage;
