import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navigation } from "../../../data/navigation";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Navbar.css";

function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand">
          <span className="navbar__logo">BSIT</span>
          <span>{t("app.name")}</span>
        </NavLink>

        <nav className="navbar__links" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Navbar;