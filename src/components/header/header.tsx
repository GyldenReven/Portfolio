import React from "react";
import HeaderElement from "./header_element";

import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header className="bg-ctp-surface0 p-4 flex justify-between items-center rounded-b-xl shadow-lg">
            <h1>{t("header.title")}</h1>
            <menu className="flex gap-4">
                <HeaderElement name={t("header.home")} ref="/" />
                <HeaderElement name={t("header.projects")} ref="/projects" />
                <HeaderElement name={t("header.contact")} ref="/contact" />
            </menu>
        </header>
    );
};

export default Header;
