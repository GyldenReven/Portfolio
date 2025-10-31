import { useTranslation } from "react-i18next";
import { languagesSkills, toolsSkills } from "../types/skills";
import EducationElement from "../components/homepage/education_element";

function HomePage() {
    const { t } = useTranslation();

    return (
        <div className="max-w-[1600px] grid gap-3 col-span-2 grid-cols-[1fr_350px] m-auto">
            <section>
                <h1>{t("name")}</h1>
                <div>{t("homepage.welcome")}</div>
            </section>
            <section>
                <h2>{t("homepage.experience_title")}</h2>
                <p>{t("homepage.experience_text")}</p>
            </section>
            <section>
                <h2>{t("homepage.education_title")}</h2>
                <ol className="relative border-s border-ctp-overlay0 ml-2 mt-6">
                    <EducationElement type="university" latest />
                    <EducationElement type="secondaryschool" />
                </ol>
            </section>
            <section className="col-2 row-start-1 row-end-4 ">
                <h2>{t("homepage.skills_title")}</h2>
                <h3>{t("homepage.skills.programming_languages")}</h3>
                <ul>
                    {languagesSkills.map((skill) => (
                        <li
                            key={skill.name}
                            className="flex items-center gap-2 mb-2"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name + " icon"}
                                className="w-6 h-6"
                            />
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
                <h3>{t("homepage.skills.tools")}</h3>
                <ul>
                    {toolsSkills.map((skill) => (
                        <li
                            key={skill.name}
                            className="flex items-center gap-2 mb-2"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name + " icon"}
                                className="w-6 h-6"
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
                    </ul>
                </ul>
            </section>
        </div>
    );
}

export default HomePage;
