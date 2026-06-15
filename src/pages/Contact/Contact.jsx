import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="page">
      <div className="container">
        <h1>{t("pages.contact.title")}</h1>
        <p>{t("pages.contact.description")}</p>
      </div>
    </section>
  );
}

export default Contact;