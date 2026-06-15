import { useTranslation } from "react-i18next";

function IndividualProjects() {
  const { t } = useTranslation();

  return (
    <section className="page">
      <div className="container">
        <h1>{t("pages.individualProjects.title")}</h1>
        <p>{t("pages.individualProjects.description")}</p>
      </div>
    </section>
  );
}

export default IndividualProjects;