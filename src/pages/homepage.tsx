import { useTranslation } from "react-i18next";

function HomePage() {
    const { t } = useTranslation();

    return (
        <div className="max-w-[1600px] grid gap-3 col-span-2 grid-cols-[1fr_350px] m-auto">
            <section>
                <h1>{t("name")}</h1>
                <div>{t("homepage.welcome")}</div>
            </section>
            <section>
                <h2>{t("homepage.experience_title")}</h2>
                <p>{t("homepage.experience_text")}</p>
            </section>
            <section>
                <h2>{t("homepage.education_title")}</h2>
                <ul>
                    <li>{t("homepage.education.highschool")}</li>
                    <li>{t("homepage.education.bachelor")}</li>
                    <li>{t("homepage.education.master")}</li>
                </ul>
            </section>
            <section className="col-2 row-start-1 row-end-4 ">
                <h2>{t("homepage.skills_title")}</h2>
            </section>
        </div>
    );
}

export default HomePage;
