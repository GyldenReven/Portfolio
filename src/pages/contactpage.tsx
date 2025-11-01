import { useTranslation } from "react-i18next";
import emailIcon from "../assets/email.svg";
import githubIcon from "../assets/github.svg";

function ContactPage() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col md:flex-row gap-4">
            <section>
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
                            GitHub
                        </a>
                    </li>
                </ol>
            </section>
            <section>
                <h2>{t("contact.title")}</h2>
                <form className="max-w-lg mx-auto mt-6">
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-ctp-text mb-2"
                        >
                            {t("contact.name_label")}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border border-ctp-overlay0 rounded bg-ctp-surface0 text-ctp-text"
                            placeholder={t("contact.name_placeholder")}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-ctp-text mb-2"
                        >
                            {t("contact.email_label")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border border-ctp-overlay0 rounded bg-ctp-surface0 text-ctp-text"
                            placeholder={t("contact.email_placeholder")}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-ctp-text mb-2"
                        >
                            {t("contact.message_label")}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="w-full p-2 border border-ctp-overlay0 rounded bg-ctp-surface0 text-ctp-text"
                            placeholder={t("contact.message_placeholder")}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-teal-600 text-ctp-teal-50 px-4 py-2 rounded-lg transition-colors hover:bg-teal-700 border-2 border-teal-700 hover:border-teal-800"
                    >
                        {t("contact.submit_button")}
                    </button>
                </form>
            </section>
        </div>
    );
}

export default ContactPage;
