import { useTranslation } from "react-i18next";
import { FaGithub, FaUsers, FaCode } from "react-icons/fa";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__badge">{t("hero.badge")}</span>

          <h1>{t("hero.title")}</h1>

          <p>{t("hero.subtitle")}</p>

          <div className="hero__buttons">
            <Link className="btn-primary" to="/common-projects">
              {t("hero.exploreProjects")}
            </Link>

            <Link className="btn-secondary" to="/members">
              {t("hero.meetTeam")}
            </Link>
          </div>

        </div>

        <div className="hero__stats">
          <div className="stat-card">
            <FaUsers size={28} />
            <h3>5</h3>
            <p>{t("hero.members")}</p>
          </div>

          <div className="stat-card">
            <FaCode size={28} />
            <h3>10+</h3>
            <p>{t("hero.projects")}</p>
          </div>

          <div className="stat-card">
            <FaGithub size={28} />
            <h3>Agile</h3>
            <p>{t("hero.methodology")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;