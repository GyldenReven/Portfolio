import { useTranslation } from "react-i18next";

const TimelineElement: React.FC<{
    category: string;
    type: string;
    latest?: boolean;
    icon?: string;
}> = ({ category, type, latest, icon }) => {
    const { t } = useTranslation();

    return (
        <li className="mb-5 ms-6">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-ctp-surface1 rounded-full -start-5 ring-6 ring-ctp-surface0 hover:scale-120 hover:ring-0 transition-all duration-300 ">
                {icon && (
                    <img
                        src={icon}
                        alt={`${t(
                            "homepage." + category + "." + type + "_title"
                        )} icon`}
                        className="w-7 h-7"
                    />
                )}
                {!icon && (
                    <div className="w-7 h-7 bg-ctp-text rounded-full"></div>
                )}
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white pt-2">
                {t("homepage." + category + "." + type + "_title")}
                {latest && (
                    <span className="bg-ctp-teal-950 text-ctp-teal-50 text-sm font-bold me-2 px-2.5 py-0.5 rounded-lg ms-3">
                        {t("homepage.latest_label")}
                    </span>
                )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-ctp-subtext0">
                {t("homepage." + category + "." + type + "_date")}
            </time>
            <p className="mb-4 text-base font-normal text-ctp-text">
                {t("homepage." + category + "." + type + "_desc")}
            </p>
        </li>
    );
};

export default TimelineElement;
