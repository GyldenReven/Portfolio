import React from "react";

import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="text-center text-sm text-zinc-200 bg-ctp-mantle p-4 mt-8 flex justify-center items-center">
            <div>
                © 2025 {t("name")}. {t("footer.text")}
            </div>
            <div className="ml-4">
                {t("footer.contact")}
                <div className="flex justify-center items-center">
                    <img
                        src="/mail.svg"
                        alt="mail icon"
                        className="h-6 w-6 ml-4"
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
            </div>
        </footer>
    );
};

export default Footer;
