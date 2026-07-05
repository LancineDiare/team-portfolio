/**
 * Skeleton Component
 *
 * Reusable placeholder loader for cards, text,
 * images, and future API/database loading states.
 */

import PropTypes from "prop-types";

import "./Skeleton.css";

function Skeleton({ type = "text" }) {
  return <div className={`skeleton skeleton--${type}`} aria-hidden="true" />;
}

Skeleton.propTypes = {
  type: PropTypes.oneOf(["text", "title", "avatar", "card", "image"]),
};

export default Skeleton;