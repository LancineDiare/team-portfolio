import { useTranslation } from "react-i18next";

function Members() {
  const { t } = useTranslation();

  return (
    <section className="page">
      <div className="container">
        <h1>{t("pages.members.title")}</h1>
        <p>{t("pages.members.description")}</p>
      </div>
    </section>
  );
}

export default Members;