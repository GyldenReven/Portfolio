import { useTranslation } from "react-i18next";
import { languagesSkills, toolsSkills } from "../types/skills";
import Timeline from "../components/homepage/timeline";
import TimelineElement from "../components/homepage/timeline_element";
import logoIUT from "../assets/iut_lens.png";
import logoNDC from "../assets/ndc.png";
import logoBaudimont from "../assets/baudimont.svg";

function HomePage() {
    const { t } = useTranslation();

    return (
        <div className="max-w-[1600px] grid gap-3 col-span-2 md:grid-cols-[1fr_300px] grid-cols-[1fr] m-auto">
            <section>
                <h1>{t("name")}</h1>
                <div>{t("homepage.welcome")}</div>
                <div className="flex gap-4 flex-wrap mt-4">
                    <a
                        href="/projects"
                        className="group/link bg-ctp-surface1 border-2 border-ctp-overlay0 p-2 inline-block mt-4 rounded-xl hover:border-copper-400 hover:scale-105 transition-all"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-ctp-text group-hover/link:fill-copper-200 transition-all duration-300 ease-in-out inline-block mr-2"
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
                        {t("homepage.projects_link")}
                    </a>
                    <button
                        onClick={() => {
                            window.scrollBy({
                                top: document
                                    .getElementById("skills")
                                    ?.getBoundingClientRect().top,
                                behavior: "smooth",
                            });
                        }}
                        className="group/link bg-ctp-surface1 border-2 border-ctp-overlay0 p-2 mt-4 rounded-xl hover:border-copper-400 hover:scale-105 transition-all block md:hidden"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-ctp-text group-hover/link:fill-copper-200 transition-all duration-300 ease-in-out inline mr-2"
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
                        {t("homepage.skills_link")}
                    </button>
                </div>
            </section>
            <section>
                <h2>{t("homepage.experience_title")}</h2>
                <Timeline>
                    <TimelineElement
                        category="experience"
                        type="ndc2"
                        latest
                        icon={logoNDC}
                    />
                    <TimelineElement
                        category="experience"
                        type="ndc1"
                        icon={logoNDC}
                    />
                </Timeline>
            </section>
            <section>
                <h2>{t("homepage.education_title")}</h2>
                <Timeline>
                    <TimelineElement
                        category="education"
                        type="university"
                        latest
                        icon={logoIUT}
                    />
                    <TimelineElement
                        category="education"
                        type="secondaryschool"
                        icon={logoBaudimont}
                    />
                </Timeline>
            </section>
            <section
                id="skills"
                className="md:col-2 md:row-start-1 md:row-end-4"
            >
                <h2>{t("homepage.skills_title")}</h2>
                <h3>{t("homepage.skills.programming_languages")}</h3>
                <ul className="border-b-2 border-ctp-overlay0 pb-2 mb-4">
                    {languagesSkills.map((skill) => (
                        <li
                            key={skill.name}
                            className="flex items-center gap-2 mb-3"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name + " icon"}
                                className="w-8 h-8"
                            />
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
                <h3>{t("homepage.skills.tools")}</h3>
                <ul className="border-b-2 border-ctp-overlay0 pb-2 mb-4">
                    {toolsSkills.map((skill) => (
                        <li
                            key={skill.name}
                            className="flex items-center gap-2 mb-3"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name + " icon"}
                                className="w-8 h-8"
                            />
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
                <ul>
                    <h3>{t("homepage.skills.languages_title")}</h3>
                    <ul>
                        <li>{t("homepage.skills.languages.french")}</li>
                        <li>{t("homepage.skills.languages.english")}</li>
                        <li>{t("homepage.skills.languages.spanish")}</li>
                    </ul>
                </ul>
            </section>
        </div>
    );
}

export default HomePage;
