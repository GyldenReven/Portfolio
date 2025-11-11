import { useTranslation } from "react-i18next";
import HomeButton from "../components/homepage/home_button";
import profilePicture from "../assets/profile_picture.jpg";
import Cog from "../components/homepage/cog";

function HomePage() {
    const { t } = useTranslation();

    return (
        <div>
            <section className="relative justify-around items-center flex flex-row flex-wrap mt-20">
                <Cog position="top-[15px] left-[-45px] rotate-[25deg] scale-120" />
                <Cog position="top-[-23px] left-[-5px]" />
                <div className="md:w-1/2 pt-4 md:pt-0">
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
            <section className="relative">
                <Cog position="top-[5px] right-[-5px] scale-120 rotate-[25deg]" />
                <Cog position="top-[-20px] right-[45px] scale-110 rotate-[50deg]" />
                <h2>{t("homepage.goals_title")}</h2>
                <p className="mb-4">{t("homepage.goals_description_part1")}</p>
                <p>{t("homepage.goals_description_part2")}</p>
                <Cog position="bottom-[-45px] left-[100px] scale-120 rotate-[25deg]" />
                <Cog position="bottom-[-45px] left-[155px] rotate-[42deg]" />
            </section>
        </div>
    );
}

export default HomePage;
