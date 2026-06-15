/**
 * Project Card Component
 *
 * Reusable card for common and individual projects.
 */

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { t } = useTranslation();

  return (
    <article className="project-card">
      {/* Project Category */}
      <span className="project-card__category">{project.category}</span>

      {/* Project Main Info */}
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {/* Technology Tags */}
      <div className="project-card__tags">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {/* Project Links */}
      <div className="project-card__links">
        <Link to={`/projects/${project.id}`}>{t("buttons.viewDetails")}</Link>
        <a href={project.github}>{t("buttons.github")}</a>
        <a href={project.liveDemo}>{t("buttons.liveDemo")}</a>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    liveDemo: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;