import { useTranslation } from "react-i18next";
import { languagesSkills, toolsSkills } from "../types/skills";
import Timeline from "../components/homepage/timeline";
import TimelineElement from "../components/homepage/timeline_element";
import logoIUT from "../assets/iut_lens.png";
import logoNDC from "../assets/ndc.png";
import logoBaudimont from "../assets/baudimont.svg";
import frenchFlag from "../assets/flags/france.png";
import englishFlag from "../assets/flags/uk.png";
import spanishFlag from "../assets/flags/spain.svg";

function AboutPage() {
    const { t } = useTranslation();

    return (
        <div className="max-w-[1130px] grid gap-3 col-span-2 md:grid-cols-[1fr_300px] grid-cols-[1fr] m-auto">
            <section>
                <h2>{t("homepage.experience_title")}</h2>
                <Timeline>
                    <TimelineElement
                        category="experience"
                        type="ndc2"
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
                        onGoing
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
                        <li className="mb-3">
                            <img src={frenchFlag} alt="Drapeau français" className="h-6 inline-block mr-2 rounded-sm" />
                            {t("homepage.skills.languages.french")}
                        </li>
                        <li className="mb-3">
                            <img src={englishFlag} alt="Drapeau anglais" className="h-6 inline-block mr-2 rounded-sm" />
                            {t("homepage.skills.languages.english")}
                        </li>
                        <li className="mb-3">
                            <img src={spanishFlag} alt="Drapeau espagnol" className="h-6 inline-block mr-2 rounded-sm" />
                            {t("homepage.skills.languages.spanish")}
                        </li>
                    </ul>
                </ul>
            </section>
        </div>
    );
}

export default AboutPage;
