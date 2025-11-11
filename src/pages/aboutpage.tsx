import { useTranslation } from "react-i18next";
import { languagesSkills, toolsSkills } from "../types/skills";
import Timeline from "../components/homepage/timeline";
import TimelineElement from "../components/homepage/timeline_element";
import logoIUT from "../assets/icons/studies/iut_lens.png";
import logoNDC from "../assets/icons/experiences/ndc.png";
import logoBaudimont from "../assets/icons/studies/baudimont.svg";
import frenchFlag from "../assets/flags/france.png";
import englishFlag from "../assets/flags/uk.png";
import spanishFlag from "../assets/flags/spain.svg";
import cvPdf from "../assets/cv.pdf";

function AboutPage() {
    const { t } = useTranslation();

    return (
        <div className="max-w-[1130px] grid gap-3 col-span-2 md:grid-cols-[1fr_300px] grid-cols-[1fr] m-auto">
            <section className="flex flex-col justify-center">
                <h2 className="w-max mx-auto">{t("about.cv_title")}</h2>
                <a
                    href={cvPdf}
                    download
                    rel="noopener noreferrer"
                    className="flex justify-center items-center border-2 border-ctp-overlay0 p-2 rounded-xl bg-ctp-surface1 transition-all border-b-2 font-medium text-lg hover:border-copper-400 hover:scale-110 mt-2 mx-auto group/cv-link"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-8 w-8 mr-2 fill-ctp-text hover:fill-copper-300 transition-all group-hover/cv-link:fill-copper-300"
                        fill="current"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                                fill="current"
                            ></path>{" "}
                            <path
                                d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                                fill="current"
                            ></path>{" "}
                        </g>
                    </svg>
                    <div>
                    {t("about.cv_link")}
                    </div>
                </a>
            </section>
            <section>
                <h2>{t("about.other_experiences_title")}</h2>
                <Timeline>
                    <TimelineElement
                        category="other_experiences"
                        type="ndc2"
                        icon={logoNDC}
                    />
                    <TimelineElement
                        category="other_experiences"
                        type="ndc1"
                        icon={logoNDC}
                    />
                </Timeline>
            </section>
            <section>
                <h2>{t("about.education_title")}</h2>
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
                <h2>{t("about.skills_title")}</h2>
                <h3>{t("about.skills.programming_languages")}</h3>
                <ul className="border-b-2 border-dashed border-ctp-overlay0 pb-2 mb-4">
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
                <h3>{t("about.skills.tools")}</h3>
                <ul className="border-b-2 border-dashed border-ctp-overlay0 pb-2 mb-4">
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
                    <h3>{t("about.skills.languages_title")}</h3>
                    <ul>
                        <li className="mb-3">
                            <img
                                src={frenchFlag}
                                alt="Drapeau français"
                                className="h-6 inline-block mr-2 rounded-sm"
                            />
                            {t("about.skills.languages.french")}
                        </li>
                        <li className="mb-3">
                            <img
                                src={englishFlag}
                                alt="Drapeau anglais"
                                className="h-6 inline-block mr-2 rounded-sm"
                            />
                            {t("about.skills.languages.english")}
                        </li>
                        <li className="mb-3">
                            <img
                                src={spanishFlag}
                                alt="Drapeau espagnol"
                                className="h-6 inline-block mr-2 rounded-sm"
                            />
                            {t("about.skills.languages.spanish")}
                        </li>
                    </ul>
                </ul>
            </section>
        </div>
    );
}

export default AboutPage;
