/**
 * Loading Spinner Component
 *
 * Reusable loading indicator for pages, buttons,
 * async operations, and future API/database requests.
 */

import PropTypes from "prop-types";

import "./LoadingSpinner.css";

function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="loading-spinner" role="status" aria-live="polite">
      <div className="loading-spinner__circle" aria-hidden="true"></div>
      <p>{text}</p>
    </div>
  );
}

LoadingSpinner.propTypes = {
  text: PropTypes.string,
};

export default LoadingSpinner;