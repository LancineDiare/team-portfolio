/**
 * Common Projects Page
 *
 * Displays collaborative team projects.
 */

import { useTranslation } from "react-i18next";

import SEO from "../../components/common/SEO/SEO";

import { commonProjects } from "../../data/commonProjects";
import ProjectCard from "../../components/cards/ProjectCard/ProjectCard";

import "./CommonProjects.css";

function CommonProjects() {
  const { t } = useTranslation();

  return (
    <section className="page">
      <div className="container">
        {/* Page Header */}
        <h1>{t("pages.commonProjects.title")}</h1>
        <p>{t("pages.commonProjects.description")}</p>

        <SEO
            title="Common Projects | TriTechPlus Team Portfolio"
            description="Explore common team projects developed by TriTechPlus, including Master Guesser, ChikaMo, and Pathfinder AI."
          />

        {/* Common Projects Grid */}
        <div className="projects-grid">
          {commonProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommonProjects;