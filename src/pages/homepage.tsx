import { useTranslation } from "react-i18next";
import HomeButton from "../components/homepage/home_button";

function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <section className="justify-center items-center flex flex-col mt-20">
                <h1>{t("name")}</h1>
                <p>{t("homepage.welcome")}</p>
                <div className="w-full sm:w-1/2 md:w-full grid md:grid-cols-3 gap-4 flex-wrap mt-4 max-w-[700px]">
                    <HomeButton
                        name={t("homepage.about_me_link")}
                        ref="/about"
                    />
                    <HomeButton
                        name={t("homepage.projects_link")}
                        ref="/projects"
                    />
                    <HomeButton
                        name={t("homepage.contact_link")}
                        ref="/contact"
                    />
                </div>
            </section>
            <section>
                <h2>{t("homepage.goals_title")}</h2>
                <p className="mb-4">
                    {t("homepage.goals_description_part1")}
                </p>
                <p>
                    {t("homepage.goals_description_part2")}
                </p>
            </section>
            <section>
                <h2>{t("homepage.hobbies_title")}</h2>
                <div className="grid gap-4 md:grid-cols-3">
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
        </>
    );
}

export default HomePage;
