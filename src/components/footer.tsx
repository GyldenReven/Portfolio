import React from "react";
import emailIcon from "../assets/email.svg";

import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="text-center text-sm text-ctp-subtext0 bg-ctp-mantle p-4 mt-8 flex justify-center items-center">
            <div>
                © 2025 {t("name")}. {t("footer.text")}
            </div>
            <div className="flex flex-col ml-4 align-start justify-start border-l-2 border-ctp-overlay0 pl-4">
                <a
                    className="hover:underline justify-start w-max"
                    href="/contact"
                >
                    {t("footer.contact")}
                </a>
                <div className="flex justify-center items-center">
                    <img src={emailIcon} alt="mail icon" className="h-6 w-6" />
                    <a
                        href="mailto:simon270906@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 hover:underline"
                    >
                        simon270906@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
