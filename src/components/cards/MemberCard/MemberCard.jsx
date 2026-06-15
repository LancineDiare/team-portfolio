/**
 * Member Card Component
 *
 * Reusable component displaying
 * team member information.
 */

import "./MemberCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MemberCard({ member }) {
  return (
    <article className="member-card">

      {/* Initials Avatar */}
      <div className="member-avatar">
        {member.initials}
      </div>

      {/* Member Information */}
      <h3>{member.name}</h3>

      <p className="role">
        {member.role}
      </p>

      <p className="specialization">
        {member.specialization}
      </p>

      {/* Portfolio Link */}
      <Link
        className="member-card__link"
        to={`/members/${member.id}`}
      >
        View Profile
      </Link>

    </article>
  );
}

/**
 * Component Prop Validation
 */
MemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string,
    initials: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    specialization: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }).isRequired,
};

export default MemberCard;