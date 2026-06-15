/**
 * Member Profile Page
 *
 * Dynamic page for each team member.
 * URL example: /members/ld
 */

import { Link, useParams } from "react-router-dom";
import { members } from "../../data/members";

import "./MemberProfile.css";

function MemberProfile() {
  const { memberId } = useParams();

  // Find selected member based on URL parameter
  const member = members.find((item) => item.id === memberId);

  // Handle invalid member profile URLs
  if (!member) {
    return (
      <section className="page">
        <div className="container">
          <h1>Member Not Found</h1>
          <p>The requested team member profile does not exist.</p>
          <Link to="/members">Back to Members</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="container member-profile">
        {/* Profile Header */}
        <div className="member-profile__header">
          <div className="member-profile__avatar">{member.initials}</div>

          <div>
            <h1>{member.name}</h1>
            <p className="member-profile__role">{member.role}</p>
            <p>{member.specialization}</p>
          </div>
        </div>

        {/* Biography */}
        <div className="member-profile__section">
          <h2>About</h2>
          <p>{member.bio}</p>
        </div>

        {/* Skills */}
        <div className="member-profile__section">
          <h2>Skills</h2>

          <div className="member-profile__skills">
            {member.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="member-profile__section">
          <h2>Links</h2>

          <div className="member-profile__links">
            <a href={member.github}>GitHub</a>
            <a href={member.linkedin}>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberProfile;