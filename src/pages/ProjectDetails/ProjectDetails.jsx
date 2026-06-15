/**
 * Project Details Page
 *
 * Dynamic page for each common or individual project.
 */

import { Link, useParams } from "react-router-dom";

import { commonProjects } from "../../data/commonProjects";
import { individualProjects } from "../../data/individualProjects";

import "./ProjectDetails.css";

function ProjectDetails() {
  const { projectId } = useParams();

  // Merge all project sources into one searchable list
  const allProjects = [...commonProjects, ...individualProjects];

  // Find selected project based on URL parameter
  const project = allProjects.find((item) => item.id === projectId);

  // Handle invalid project URLs
  if (!project) {
    return (
      <section className="page">
        <div className="container">
          <h1>Project Not Found</h1>
          <p>The requested project does not exist.</p>
          <Link to="/common-projects">Back to Projects</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="container project-details">
        {/* Project Header */}
        <span className="project-details__category">{project.category}</span>

        <h1>{project.title}</h1>

        <p>{project.description}</p>

        {/* Project Technologies */}
        <div className="project-details__section">
          <h2>Technologies</h2>

          <div className="project-details__tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project Ownership */}
        <div className="project-details__section">
          <h2>Ownership</h2>

          <p>
            {project.ownerInitials
              ? `Individual project by ${project.ownerInitials}`
              : "Common team project"}
          </p>
        </div>

        {/* Project Links */}
        <div className="project-details__section">
          <h2>Links</h2>

          <div className="project-details__links">
            <a href={project.github}>GitHub</a>
            <a href={project.liveDemo}>Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;