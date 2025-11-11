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
                className="md:col-2 md:row-start-1 md:row-end-5"
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
            <section>
                <h2>{t("homepage.hobbies_title")}</h2>
                <div className="grid gap-4 lg:grid-cols-3">
                    <div className="bg-ctp-surface1 border-2 border-ctp-overlay0 p-4 rounded-lg">
                        <svg
                            className="w-8 h-8 inline-block mr-2 mb-1"
                            viewBox="0 0 24 24"
                            fill="#FFFFFF"
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
                                <path d="M7.99999 8.5C7.99999 7.94772 7.55227 7.5 6.99999 7.5C6.4477 7.5 5.99999 7.94772 5.99999 8.5V9H5.49999C4.9477 9 4.49999 9.44771 4.49999 10C4.49999 10.5523 4.9477 11 5.49999 11H5.99999V11.5C5.99999 12.0523 6.4477 12.5 6.99999 12.5C7.55227 12.5 7.99999 12.0523 7.99999 11.5V11H8.49999C9.05227 11 9.49999 10.5523 9.49999 10C9.49999 9.44771 9.05227 9 8.49999 9H7.99999V8.5Z"></path>{" "}
                                <path d="M18 8C18 8.55229 17.5523 9 17 9C16.4477 9 16 8.55229 16 8C16 7.44772 16.4477 7 17 7C17.5523 7 18 7.44772 18 8Z"></path>{" "}
                                <path d="M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13Z"></path>{" "}
                                <path d="M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44771 14.4477 9 15 9C15.5523 9 16 9.44771 16 10Z"></path>{" "}
                                <path d="M19 11C19.5523 11 20 10.5523 20 10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10C18 10.5523 18.4477 11 19 11Z"></path>{" "}
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 3C10.1879 3 7.96237 3.25817 6.21782 3.5093C3.94305 3.83676 2.09096 5.51696 1.60993 7.7883C1.34074 9.05935 1.07694 10.5622 1.01649 11.8204C0.973146 12.7225 0.877981 13.9831 0.777155 15.1923C0.672256 16.4504 1.09148 17.7464 1.86079 18.6681C2.64583 19.6087 3.88915 20.2427 5.32365 19.8413C6.24214 19.5842 6.97608 18.9387 7.5205 18.3026C8.07701 17.6525 8.51992 16.9124 8.83535 16.3103C9.07821 15.8467 9.50933 15.5855 9.91539 15.5855H14.0846C14.4906 15.5855 14.9218 15.8467 15.1646 16.3103C15.4801 16.9124 15.923 17.6525 16.4795 18.3026C17.0239 18.9387 17.7578 19.5842 18.6763 19.8413C20.1108 20.2427 21.3541 19.6087 22.1392 18.6681C22.9085 17.7464 23.3277 16.4504 23.2228 15.1923C23.122 13.9831 23.0268 12.7225 22.9835 11.8204C22.923 10.5622 22.6592 9.05935 22.39 7.7883C21.909 5.51696 20.0569 3.83676 17.7821 3.5093C16.0376 3.25817 13.8121 3 12 3ZM6.50279 5.48889C8.22744 5.24063 10.3368 5 12 5C13.6632 5 15.7725 5.24063 17.4972 5.4889C18.965 5.70019 20.1311 6.77489 20.4334 8.20267C20.6967 9.44565 20.9332 10.8223 20.9858 11.9164C21.0309 12.856 21.1287 14.1463 21.2297 15.3585C21.2912 16.0956 21.0342 16.8708 20.6037 17.3866C20.1889 17.8836 19.7089 18.0534 19.2153 17.9153C18.8497 17.8129 18.4327 17.509 17.9989 17.0021C17.5771 16.5094 17.2144 15.9131 16.9362 15.3822C16.4043 14.3667 15.3482 13.5855 14.0846 13.5855H9.91539C8.65178 13.5855 7.59571 14.3667 7.06374 15.3822C6.78558 15.9131 6.42285 16.5094 6.00109 17.0021C5.56723 17.509 5.15027 17.8129 4.78463 17.9153C4.29109 18.0534 3.81102 17.8836 3.39625 17.3866C2.96576 16.8708 2.70878 16.0956 2.77024 15.3585C2.87131 14.1463 2.96904 12.856 3.01418 11.9164C3.06675 10.8223 3.30329 9.44565 3.56653 8.20267C3.86891 6.77489 5.03497 5.70019 6.50279 5.48889Z"
                                ></path>{" "}
                            </g>
                        </svg>
                        <h3 className="inline-block">
                            {t("homepage.hobbies.video_games")}
                        </h3>
                        <p>{t("homepage.hobbies.video_games_desc")}</p>
                    </div>
                    <div className="bg-ctp-surface1 p-4 rounded-lg border-2 border-ctp-overlay0">
                        <svg
                            className="w-8 h-8 inline-block mr-2 mb-2"
                            fill="#ffffff"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M14.17 3.59 16 1.76 14.24 0l-1.83 1.83v.85l-1.8 1.83a4.18 4.18 0 0 0-2.34-.85 3.73 3.73 0 0 0-2.8 1.07 4.61 4.61 0 0 0-1 1.34.79.79 0 0 1-.23.34 1.77 1.77 0 0 1-.39 0 2.8 2.8 0 0 0-2.46.84A4.73 4.73 0 0 0 0 10.8 5.46 5.46 0 0 0 5.38 16a4.76 4.76 0 0 0 3.39-1.38 2.8 2.8 0 0 0 .83-2.46 1.76 1.76 0 0 1 0-.39.85.85 0 0 1 .34-.23 4.42 4.42 0 0 0 1.34-1 3.71 3.71 0 0 0 1.07-2.79 4.11 4.11 0 0 0-.85-2.35l1.83-1.83zm-3.05 4.19a2.46 2.46 0 0 1-.72 1.88 3.23 3.23 0 0 1-1 .78 1.94 1.94 0 0 0-.69.47 1.57 1.57 0 0 0-.34 1.34 1.6 1.6 0 0 1-.48 1.51 3.86 3.86 0 0 1-5.44-.22 4.17 4.17 0 0 1-1.24-2.79 3.55 3.55 0 0 1 1-2.65 1.61 1.61 0 0 1 1.51-.48 1.56 1.56 0 0 0 1.34-.34 2.15 2.15 0 0 0 .48-.69 3 3 0 0 1 .77-1 2.47 2.47 0 0 1 1.88-.72 3 3 0 0 1 1.52.5L7.4 7.73l.88.88 2.34-2.35a3 3 0 0 1 .5 1.52z"></path>
                                <path d="M5.83 8.33a1.76 1.76 0 0 0-1.29.51 1.82 1.82 0 0 0 0 2.57 1.88 1.88 0 0 0 1.38.59 1.75 1.75 0 0 0 1.24-.51 1.82 1.82 0 0 0 0-2.57 1.93 1.93 0 0 0-1.33-.59zm.47 2.27a.64.64 0 0 1-.9-.9.56.56 0 0 1 .38-.15.74.74 0 0 1 .45.2.6.6 0 0 1 .07.85z"></path>
                            </g>
                        </svg>
                        <h3 className="inline-block">
                            {t("homepage.hobbies.guitar")}
                        </h3>
                        <p>{t("homepage.hobbies.guitar_desc")}</p>
                    </div>
                    <div className="bg-ctp-surface1 p-4 rounded-lg border-2 border-ctp-overlay0">
                        <svg
                            className="w-8 h-8 inline-block mr-2 mb-1"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ffffff"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fill="none"
                                    stroke="#ffffff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M448,341.37V170.61A32,32,0,0,0,432.11,143l-152-88.46a47.94,47.94,0,0,0-48.24,0L79.89,143A32,32,0,0,0,64,170.61V341.37A32,32,0,0,0,79.89,369l152,88.46a48,48,0,0,0,48.24,0l152-88.46A32,32,0,0,0,448,341.37Z"
                                ></path>
                                <polyline
                                    fill="none"
                                    stroke="#ffffff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    points="69 153.99 256 263.99 443 153.99"
                                ></polyline>
                                <line
                                    fill="none"
                                    stroke="#ffffff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    x1="256"
                                    y1="463.99"
                                    x2="256"
                                    y2="263.99"
                                ></line>
                                <ellipse
                                    cx="256"
                                    cy="152"
                                    rx="24"
                                    ry="16"
                                ></ellipse>
                                <ellipse
                                    cx="208"
                                    cy="296"
                                    rx="16"
                                    ry="24"
                                ></ellipse>
                                <ellipse
                                    cx="112"
                                    cy="328"
                                    rx="16"
                                    ry="24"
                                ></ellipse>
                                <ellipse
                                    cx="304"
                                    cy="296"
                                    rx="16"
                                    ry="24"
                                ></ellipse>
                                <ellipse
                                    cx="400"
                                    cy="240"
                                    rx="16"
                                    ry="24"
                                ></ellipse>
                                <ellipse
                                    cx="304"
                                    cy="384"
                                    rx="16"
                                    ry="24"
                                ></ellipse>
                                <ellipse
                                    cx="400"
                                    cy="328"
                                    rx="16"
                                    ry="24"
                                ></ellipse>
                            </g>
                        </svg>
                        <h3 className="inline-block">{t("homepage.hobbies.board_games")}</h3>
                        <p>{t("homepage.hobbies.board_games_desc")}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
