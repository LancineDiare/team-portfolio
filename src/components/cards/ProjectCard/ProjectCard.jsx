/**
 * Project Card Component
 *
 * Reusable card for common and individual projects.
 */

import PropTypes from "prop-types";
import "./ProjectCard.css";

import { Link } from "react-router-dom";

function ProjectCard({ project }) {
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
        <Link to={`/projects/${project.id}`}>View Details</Link>
        <a href={project.github}>GitHub</a>
        <a href={project.liveDemo}>Live Demo</a>
    </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    liveDemo: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;