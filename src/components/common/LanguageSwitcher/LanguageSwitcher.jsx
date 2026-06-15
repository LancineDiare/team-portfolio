import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../utils/constants";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  return (
    <select
      aria-label="Select language"
      value={i18n.language}
      onChange={handleLanguageChange}
    >
      {LANGUAGES.map((language) => (
        <option key={language.code} value={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;