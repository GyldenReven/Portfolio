import { useTranslation } from "react-i18next";

function Page404() {
    const { t } = useTranslation();
    return (
        <section >
            <h2 className="w-max m-auto">{t("404")}</h2>
        </section>      
    );
}

export default Page404;