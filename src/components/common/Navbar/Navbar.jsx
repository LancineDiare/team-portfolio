/**
 * Navbar Component
 *
 * Main navigation bar containing brand, page links,
 * language switcher, theme toggle, and mobile menu.
 */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { navigation } from "../../../data/navigation";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import "./Navbar.css";

function Navbar() {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggles mobile navigation menu.
   */
  const handleToggleMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  /**
   * Closes mobile menu after selecting a link.
   */
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* Brand */}
        <NavLink to="/" className="navbar__brand" onClick={handleCloseMenu}>
          <span className="navbar__logo">TTP</span>
          <span>{t("app.name")}</span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar__menu-button"
          onClick={handleToggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Main Navigation Links */}
        <nav
          className={
            isMenuOpen
              ? "navbar__links navbar__links--open"
              : "navbar__links"
          }
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleCloseMenu}
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