/**
 * Project Details Page
 *
 * Dynamic page for each common or individual project.
 */

import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { commonProjects } from "../../data/commonProjects";
import { individualProjects } from "../../data/individualProjects";
import { members } from "../../data/members";

import "./ProjectDetails.css";

function ProjectDetails() {
  const { projectId } = useParams();
  const { t } = useTranslation();

  // Merge common and individual project data into one searchable array
  const allProjects = [...commonProjects, ...individualProjects];

  // Find the selected project based on the dynamic URL parameter
  const project = allProjects.find((item) => item.id === projectId);

  // Display fallback content if the project ID does not exist
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

  // Find the project owner when the project belongs to an individual member
  const owner = members.find((member) => member.id === project.ownerId);

  return (
    <section className="page">
      <div className="container project-details">
        {/* Project Header */}
        <span className="project-details__category">
          {project.category}
        </span>

        {/* Project Status */}
        {project.status && (
          <p className="project-details__status">
            Status: {project.status}
          </p>
        )}

        <h1>{project.title}</h1>

        <p>{project.description}</p>

        {/* Problem */}
        {project.problem && (
          <div className="project-details__section">
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </div>
        )}

        {/* Solution */}
        {project.solution && (
          <div className="project-details__section">
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </div>
        )}

        {/* Features */}
        {project.features && (
          <div className="project-details__section">
            <h2>Features</h2>

            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

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

          {project.type === "common" ? (
            <p>{t("projectOwnership.common")}</p>
          ) : (
            <p>
              {t("projectOwnership.individualBy")}{" "}
              {owner ? (
                <Link to={`/members/${owner.id}`}>
                  {owner.name}
                </Link>
              ) : (
                "Unknown Owner"
              )}
            </p>
          )}
        </div>

        {/* Project Links */}
        <div className="project-details__section">
          <h2>Links</h2>

          <div className="project-details__links">
            <a href={project.github}>
              {t("buttons.github")}
            </a>

            <a href={project.liveDemo}>
              {t("buttons.liveDemo")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;