import React from "react";
import emailIcon from "../assets/icons/contact/email.svg";
import githubIcon from "../assets/icons/contact/github.svg";
import linkedinIcon from "../assets/icons/contact/linkedin.svg";

import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="text-center text-sm text-ctp-subtext0 bg-ctp-mantle p-2 mt-8 flex justify-around flex-col md:flex-row">
            <div className="h-full align-center justify-center text-center mt-auto mb-auto">
                © 2025 {t("name")}. {t("footer.text")}
            </div>
            <div className="md:w-2/3 justify-around ml-5 mr-5 flex pt-2 mt-2 border-t-2 border-ctp-overlay0 md:border-t-0 md:mt-0 md:pt-0">
                <div className="gap-1 flex flex-col md:ml-4 align-start justify-start md:border-l-2 border-ctp-overlay0 pl-4">
                    <a
                        className="hover:underline justify-start w-max"
                        href="/contact"
                    >
                        {t("footer.contact")}
                    </a>
                    <div className="flex justify-center items-center">
                        <img
                            src={emailIcon}
                            alt="mail icon"
                            className="h-6 w-6"
                        />
                        <a
                            href="mailto:simon270906@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 hover:underline"
                        >
                            simon270906@gmail.com
                        </a>
                    </div>
                    <div className="flex">
                        <img
                            src={githubIcon}
                            alt="GitHub icon"
                            className="h-6 w-6"
                        />
                        <a
                            href="https://github.com/GyldenReven"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 hover:underline"
                        >
                            GyldenReven
                        </a>
                    </div>
                    <div className="flex">
                        <img
                            src={linkedinIcon}
                            alt="LinkedIn icon"
                            className="h-6 w-6"
                        />
                        <a
                            href="https://www.linkedin.com/in/simon-cohet-273a64385"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 hover:underline"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="h-full flex flex-col ml-4 align-start justify-start border-l-2 border-ctp-overlay0 pl-4">
                    <div className="justify-start w-max mb-1">
                        {t("footer.pages")}
                    </div>
                    <ol className="flex flex-col gap-1 list-disc list-inside justify-start">
                        <li className="w-max">
                            <a href="/" className="hover:underline">
                                {t("header.home")}
                            </a>
                        </li>
                        <li className="w-max">
                            <a href="/about" className="hover:underline">
                                {t("header.about")}
                            </a>
                        </li>
                        <li className="w-max">
                            <a href="/projects" className="hover:underline">
                                {t("header.projects")}
                            </a>
                        </li>
                        <li className="w-max">
                            <a href="/contact" className="hover:underline">
                                {t("header.contact")}
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
