/**
 * Home Page
 *
 * Landing page of the portfolio.
 * Shows hero section, featured projects, and team preview.
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

  // Show only selected featured projects on the homepage
  const featuredProjects = [
    ...commonProjects.slice(0, 2),
    ...individualProjects.slice(0, 1),
  ];

  // Show all team members for now
  const featuredMembers = members;

  return (
    <>
      <Hero />

      <section className="home-section">
        <div className="container">
          {/* Featured Projects Header */}
          <div className="home-section__header">
            <div>
              <h2>{t("home.featuredProjectsTitle")}</h2>
              <p>{t("home.featuredProjectsDescription")}</p>
            </div>

            <Link to="/common-projects">
              {t("home.viewAllProjects")}
            </Link>
          </div>

          {/* Featured Projects Grid */}
          <div className="home-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--light">
        <div className="container">
          {/* Team Preview Header */}
          <div className="home-section__header">
            <div>
              <h2>{t("home.teamTitle")}</h2>
              <p>{t("home.teamDescription")}</p>
            </div>

            <Link to="/members">
              {t("home.viewTeam")}
            </Link>
          </div>

          {/* Team Members Grid */}
          <div className="home-grid">
            {featuredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;