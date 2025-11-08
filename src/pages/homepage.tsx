import { useTranslation } from "react-i18next";
import HomeButton from "../components/homepage/home_button";

function HomePage() {
    const { t } = useTranslation();

    return (
        <section className="justify-center items-center flex flex-col mt-20">
                <h1>{t("name")}</h1>
                <p>{t("homepage.welcome")}</p>
                <div className="grid grid-cols-3 gap-4 flex-wrap mt-4 max-w-[700px]">
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
    );
}

export default HomePage;
