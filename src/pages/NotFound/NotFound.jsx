import { Link } from "react-router-dom";

import "./NotFound.css";

function NotFound() {
  return (
    <section className="page">
      <div className="container not-found">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="btn-primary"
        >
          Return Home
        </Link>

      </div>
    </section>
  );
}

export default NotFound;