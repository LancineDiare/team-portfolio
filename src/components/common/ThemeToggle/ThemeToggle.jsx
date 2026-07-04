/**
 * Theme Toggle Component
 *
 * Allows users to switch between light and dark mode.
 * The selected theme is saved in localStorage.
 */

import { useEffect, useState } from "react";

import "./ThemeToggle.css";

function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  /**
   * Apply theme to document root whenever theme changes.
   */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /**
   * Toggle between light and dark theme.
   */
  const handleToggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleToggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default ThemeToggle;