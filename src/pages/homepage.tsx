import { useTranslation } from "react-i18next";
import HomeButton from "../components/homepage/home_button";
import profilePicture from "../assets/profile_picture.jpg";

function HomePage() {
    const { t } = useTranslation();

    return (
        <div>
            <section className="justify-around items-center flex flex-row flex-wrap mt-20">
                <div className="md:w-1/2">
                    <h1>{t("name")}</h1>
                    <p>{t("homepage.welcome")}</p>
                </div>
                <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-40 rounded-2xl border-2 border-ctp-overlay0 shadow-xl mt-4"
                />
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
        </div>
    );
}

export default HomePage;
