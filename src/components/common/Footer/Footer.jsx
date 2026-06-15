import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
        <p>{t("footer.built")}</p>
      </div>
    </footer>
  );
}

export default Footer;