import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const requiredSpan = () => (
    <span className="text-ctp-red-400" title="Required">
        *
    </span>
);

export const ContactForm = () => {
    const contactForm = useRef<HTMLFormElement>(null);
    const { t } = useTranslation();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!contactForm.current) {
            console.log("Form not available");
            return;
        }

        emailjs
            .sendForm(
                "service_lkr8aot",
                "template_kbd6b0g",
                contactForm.current,
                {
                    publicKey: "8gmq_C7EEKotsTWPh",
                }
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                    let resultText = document.getElementById("submitResult")!;
                    resultText.textContent = t("contact.success_message");
                    resultText.classList.add("text-ctp-teal-400");
                    resultText.classList.remove("text-ctp-red-400");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    let resultText = document.getElementById("submitResult")!;
                    resultText.textContent = t("contact.error_message");
                    resultText.classList.add("text-ctp-red-400");
                    resultText.classList.remove("text-ctp-teal-400");
                }
            );
    };

    return (
        <form
            ref={contactForm}
            onSubmit={sendEmail}
        >
            <div className="mb-4">
                <label htmlFor="name" className="block text-ctp-text mb-2">
                    {t("contact.name_label")}
                    {requiredSpan()}
                </label>
                <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-ctp-overlay0 rounded bg-ctp-surface0 text-ctp-text outline-none"
                    placeholder={t("contact.name_placeholder")}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-ctp-text mb-2">
                    {t("contact.email_label")}
                    {requiredSpan()}
                </label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-ctp-overlay0 rounded bg-ctp-surface0 text-ctp-text"
                    placeholder={t("contact.email_placeholder")}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="subject" className="block text-ctp-text mb-2">
                    {t("contact.subject_label")}
                    {requiredSpan()}
                </label>
                <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-2 border border-ctp-overlay0 rounded bg-ctp-surface0 text-ctp-text"
                    placeholder={t("contact.subject_placeholder")}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-ctp-text mb-2">
                    {t("contact.message_label")}
                    {requiredSpan()}
                </label>
                <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-2 border border-ctp-overlay0 rounded bg-ctp-surface0 text-ctp-text"
                    placeholder={t("contact.message_placeholder")}
                ></textarea>
            </div>
            <div className="mb-4 flex gap-6 items-center">
                <button
                    type="submit"
                    className="bg-teal-600 text-ctp-teal-50 px-4 py-2 rounded-lg transition-colors hover:bg-teal-700 border-2 border-teal-700 hover:border-teal-800 border-b-6 active:border-b-2 active:mt-1 font-medium box-border"
                >
                    {t("contact.submit_button")}
                </button>
                <p 
                id="submitResult"
                className="text-ctp-teal-400 font-medium text-lg">
                </p>
            </div>
        </form>
    );
};

export default ContactForm;
