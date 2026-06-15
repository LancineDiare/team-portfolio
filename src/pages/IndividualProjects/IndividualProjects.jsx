/**
 * Individual Projects Page
 *
 * Displays personal projects owned by team members.
 */

import { useTranslation } from "react-i18next";
import { individualProjects } from "../../data/individualProjects";
import ProjectCard from "../../components/cards/ProjectCard/ProjectCard";

function IndividualProjects() {
  const { t } = useTranslation();

  return (
    <section className="page">
      <div className="container">
        <h1>{t("pages.individualProjects.title")}</h1>
        <p>{t("pages.individualProjects.description")}</p>

        <div className="members-grid">
          {individualProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndividualProjects;