/**
 * Individual Projects Page
 *
 * Displays personal projects owned by team members.
 */

import { useTranslation } from "react-i18next";

import SEO from "../../components/common/SEO/SEO";

import { individualProjects } from "../../data/individualProjects";
import ProjectCard from "../../components/cards/ProjectCard/ProjectCard";

import "./IndividualProjects.css";

function IndividualProjects() {
  const { t } = useTranslation();

  return (
    <section className="page">
      <div className="container">
        {/* Page Header */}
        <h1>{t("pages.individualProjects.title")}</h1>
        <p>{t("pages.individualProjects.description")}</p>

        <SEO
          title="Individual Projects | TriTechPlus Team Portfolio"
          description="Explore individual projects by TriTechPlus members, including SmartScanLab and KumIA."
        />

        {/* Individual Projects Grid */}
        <div className="projects-grid">
          {individualProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndividualProjects;