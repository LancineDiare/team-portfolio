import { useTranslation } from "react-i18next";

function CommonProjects() {
  const { t } = useTranslation();

  return (
    <section className="page">
      <div className="container">
        <h1>{t("pages.commonProjects.title")}</h1>
        <p>{t("pages.commonProjects.description")}</p>
      </div>
    </section>
  );
}

export default CommonProjects;