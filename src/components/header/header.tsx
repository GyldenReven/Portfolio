import React, { useState } from "react";
import HeaderElement from "./header_element";

import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
    const { t } = useTranslation();

    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsToggleOpen(!isToggleOpen);
    };

    return (
        <header className="sticky top-0 z-10 bg-ctp-surface0 p-4 flex justify-between items-center rounded-b-xl shadow-lg flex-col md:flex-row">
            <div className="flex justify-between gap-4 w-full md:w-auto">
                <h1>{t("header.title")}</h1>
                <button
                    className="w-12 h-12 block md:hidden bg-ctp-surface1 p-2 group/toggle rounded-lg hover:scale-110 transition-all duration-200 ease-in-out border-2 border-ctp-overlay0 hover:border-copper-400"
                    onClick={handleToggleOpen}
                >
                    <svg
                        className="inline-block transition-transform duration-300 ease-in-out group-hover/toggle:rotate-90 group-hover/toggle:text-copper-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        width="25"
                        height="25"
                    >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                        />
                    </svg>
                </button>
            </div>
            <menu
                className={`flex md:flex gap-4 flex-col md:flex-row w-11/12 md:w-auto mt-4 md:mt-0
                    ${isToggleOpen ? "flex" : "hidden"}`}
            >
                <HeaderElement name={t("header.home")} ref="/" />
                <HeaderElement name={t("header.projects")} ref="/projects" />
                <HeaderElement name={t("header.contact")} ref="/contact" />
            </menu>
        </header>
    );
};

export default Header;
