import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} BSIT Team Portfolio.</p>
        <p>Built with React, Agile, teamwork, and continuous learning.</p>
      </div>
    </footer>
  );
}

export default Footer;