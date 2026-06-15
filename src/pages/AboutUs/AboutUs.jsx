import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <section className="page">
      <div className="container">
        <h1>{t("pages.about.title")}</h1>
        <p>{t("pages.about.description")}</p>
      </div>
    </section>
  );
}

export default AboutUs;