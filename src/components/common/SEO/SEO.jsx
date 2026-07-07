/**
 * SEO Component
 *
 * Reusable page metadata component.
 */

import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

function SEO({
  title = "TriTechPlus Team Portfolio",
  description = "TriTechPlus Team Portfolio showcasing BS-IT students, projects, skills, and software development experience.",
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SEO;