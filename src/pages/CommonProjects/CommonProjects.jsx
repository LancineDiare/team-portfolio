/**
 * Common Projects Page
 *
 * Displays collaborative team projects.
 */

import { useTranslation } from "react-i18next";
import { commonProjects } from "../../data/commonProjects";
import ProjectCard from "../../components/cards/ProjectCard/ProjectCard";

function CommonProjects() {
  const { t } = useTranslation();

  return (
    <section className="page">
      <div className="container">
        <h1>{t("pages.commonProjects.title")}</h1>
        <p>{t("pages.commonProjects.description")}</p>

        <div className="members-grid">
          {commonProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommonProjects;