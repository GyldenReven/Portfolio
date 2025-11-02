import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectCard from "../components/projects/project_card";
import { projects } from "../types/project";

import { useTranslation } from "react-i18next";
import Page404 from "./page404";

function ProjectsPage() {
    const { t } = useTranslation();

    return (
        <section>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h1>{t("projects.title")}</h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {projects.map((project) => (
                                    <ProjectCard project={project} />
                                ))}
                            </div>
                        </>
                    }
                />
                {projects.map((project) => (
                    <Route
                        path={`/${project.title}`}
                        element={<ProjectCard project={project} />}
                    />
                ))}
                <Route path="*" element={<Page404 />} />
            </Routes>
        </section>
    );
}

export default ProjectsPage;
