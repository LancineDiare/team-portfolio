/**
 * Member Card Component
 *
 * Reusable component displaying team member information.
 */

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./MemberCard.css";

function MemberCard({ member }) {
  const { t } = useTranslation();

  return (
    <article className="member-card">
      {/* Initials Avatar */}
      <div className="member-avatar">{member.initials}</div>

      {/* Member Information */}
      <h3>{member.name}</h3>

      <p className="role">{member.role}</p>

      <p className="specialization">{member.specialization}</p>

      {/* Portfolio Link */}
      <Link className="member-card__link" to={`/members/${member.id}`}>
        {t("buttons.viewProfile")}
      </Link>
    </article>
  );
}

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