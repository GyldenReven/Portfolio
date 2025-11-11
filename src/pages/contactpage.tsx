import { useTranslation } from "react-i18next";
import emailIcon from "../assets/icons/contact/email.svg";
import githubIcon from "../assets//icons/contact/github.svg";
import linkedinIcon from "../assets/icons/contact/linkedin.svg";
import { ContactForm } from "../components/contact/contactform";

function ContactPage() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col md:flex-row gap-4 xl:w-2/3 mx-auto">
            <section className="md:w-1/3">
                <h2>{t("contact.info_title")}</h2>
                <ol className="list-none mt-6 space-y-4">
                    <li className="flex">
                        <img
                            src={emailIcon}
                            alt="mail icon"
                            className="h-6 w-6"
                        />
                        <a
                            href="mailto:simon270906@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 hover:underline"
                        >
                            simon270906@gmail.com
                        </a>
                    </li>
                    <li className="flex">
                        <img
                            src={githubIcon}
                            alt="GitHub icon"
                            className="h-6 w-6"
                        />
                        <a
                            href="https://github.com/GyldenReven"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 hover:underline"
                        >
                            GyldenReven
                        </a>
                    </li>
                    <li className="flex">
                        <img
                            src={linkedinIcon}
                            alt="LinkedIn icon"
                            className="h-6 w-6"
                        />
                        <a
                            href="https://www.linkedin.com/in/simon-cohet-273a64385"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 hover:underline"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ol>
            </section>
            <section>
                <h2>{t("contact.title")}</h2>
                <ContactForm />
            </section>
        </div>
    );
}

export default ContactPage;
