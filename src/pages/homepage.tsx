import { useTranslation } from "react-i18next";

function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <section className="copper-plate">
                <h1>{t("name")}</h1>
                <div>{t("bienvenue")}</div>
            </section>
        </>
    );
}

export default HomePage;
