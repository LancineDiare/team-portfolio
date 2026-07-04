/**
 * Navbar Component
 *
 * Main navigation bar containing brand, page links,
 * language switcher, and theme toggle.
 */

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { navigation } from "../../../data/navigation";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import "./Navbar.css";

function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* Brand */}
        <NavLink to="/" className="navbar__brand">
          <span className="navbar__logo">TTP</span>
          <span>{t("app.name")}</span>
        </NavLink>

        {/* Main Navigation Links */}
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

        {/* Navbar Actions */}
        <div className="navbar__actions">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;