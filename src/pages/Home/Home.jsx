/**
 * Home Page
 *
 * Professional landing page for the BSIT Team Portfolio.
 */

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "../../components/common/Hero/Hero";
import MemberCard from "../../components/cards/MemberCard/MemberCard";
import ProjectCard from "../../components/cards/ProjectCard/ProjectCard";

import { members } from "../../data/members";
import { commonProjects } from "../../data/commonProjects";
import { individualProjects } from "../../data/individualProjects";

import "./Home.css";

function Home() {
  const { t } = useTranslation();

  const featuredProjects = [
    ...commonProjects,
    ...individualProjects,
  ];

  const stats = [
    { value: "5", label: "Team Members" },
    { value: "3", label: "Common Projects" },
    { value: "2+", label: "Individual Projects" },
    { value: "3", label: "Languages" },
  ];

  const technologies = [
    "React",
    "Vite",
    "JavaScript",
    "Firebase",
    "MySQL",
    "PHP",
    "AI",
    "GitHub",
  ];

  return (
    <>
      <Hero />

      {/* Team Statistics */}
      <section className="home-section">
        <div className="container">
          <div className="home-stats">
            {stats.map((stat) => (
              <article className="home-stat-card" key={stat.label}>
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="home-section home-section--light">
        <div className="container">
          <div className="home-section__header">
            <div>
              <h2>{t("home.featuredProjectsTitle")}</h2>
              <p>{t("home.featuredProjectsDescription")}</p>
            </div>

            <Link to="/individual-projects">
              {t("home.viewAllProjects")}
            </Link>
          </div>

          <div className="home-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="home-section">
        <div className="container">
          <div className="home-section__header">
            <div>
              <h2>Technologies We Use</h2>
              <p>
                Tools and technologies used across our academic and personal projects.
              </p>
            </div>
          </div>

          <div className="home-tech-list">
            {technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="home-section home-section--light">
        <div className="container">
          <div className="home-section__header">
            <div>
              <h2>{t("home.teamTitle")}</h2>
              <p>{t("home.teamDescription")}</p>
            </div>

            <Link to="/members">{t("home.viewTeam")}</Link>
          </div>

          <div className="home-grid">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container home-cta__content">
          <h2>Building. Learning. Improving.</h2>
          <p>
            This portfolio is part of our continuous journey toward production-ready software development.
          </p>

          <Link to="/contact">Contact the Team</Link>
        </div>
      </section>
    </>
  );
}

export default Home;