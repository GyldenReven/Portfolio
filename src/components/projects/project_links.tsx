import React from "react";
import type { Project } from "../../types/project.tsx";

import { useTranslation } from "react-i18next";

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-row gap-2">
            {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    className="group/link text-ctp-text font-medium border-2 bg-ctp-surface1 border-ctp-overlay0 rounded-lg p-2 hover:border-green-400 hover:text-green-300 transition-all duration-300 ease-in-out flex justify-center items-center gap-2"
                    target="_blank"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-ctp-text group-hover/link:fill-green-300 transition-all duration-300 ease-in-out"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M960 704c-35.346 0-64 28.654-64 64v64c0 35.346-28.654 64-64 64H192c-35.346 0-64-28.654-64-64V192c0-35.346 28.654-64 64-64h64c35.346 0 64-28.654 64-64S291.346 0 256 0h-64C85.961 0 0 85.961 0 192v640c0 106.039 85.961 192 192 192h640c106.039 0 192-85.961 192-192v-64c0-35.346-28.654-64-64-64z"></path>
                            <path d="M1023.876 51.52c0-1.92 0-3.84-1.6-5.44a63.957 63.957 0 00-1.92-6.4 63.973 63.973 0 00-3.2-6.4s0-3.2-2.56-4.8a63.989 63.989 0 00-17.6-17.6L991.876 8l-6.08-3.2-6.72-1.92h-5.44A64.028 64.028 0 00959.876 0h-384c-35.346 0-64 28.654-64 64s28.654 64 64 64h229.44l-370.56 370.88c-25.007 25.007-25.007 65.553 0 90.56s65.553 25.007 90.56 0l370.56-370.88V448c0 35.346 28.654 64 64 64s64-28.654 64-64V64c.407-4.15.407-8.33 0-12.48z"></path>
                        </g>
                    </svg>
                    {t("projects.visit_live")}
                </a>
            )}
            {project.githubUrl && (
                <a
                    href={project.githubUrl}
                    className="group/github-link text-ctp-text font-medium border-2 bg-ctp-surface1 border-ctp-overlay0 rounded-lg p-2 hover:border-copper-400 hover:text-copper-300 transition-all duration-300 ease-in-out flex justify-center items-center gap-2"
                    target="_blank"
                >
                    <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 98 96"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                            className="fill-ctp-text group-hover/github-link:fill-copper-300 transition-all duration-300 ease-in-out"
                        />
                    </svg>
                    <div className="h-max">GitHub</div>
                </a>
            )}
        </div>
    );
};

export default ProjectLinks;
