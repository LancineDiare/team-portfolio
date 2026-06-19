/**
 * Member Profile Page
 *
 * Dynamic page for each team member.
 */

import { Link, useParams } from "react-router-dom";

import { members } from "../../data/members";
import { skills } from "../../data/skills";

import "./MemberProfile.css";

function MemberProfile() {
  const { memberId } = useParams();

  // Find selected member from URL parameter
  const member = members.find((item) => item.id === memberId);

  // Get skills owned by selected member
  const memberSkills = skills.filter((skill) => skill.ownerId === memberId);

  // Handle invalid member URLs
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

        {/* About */}
        <div className="member-profile__section">
          <h2>About</h2>
          <p>{member.profileSummary || member.bio}</p>
        </div>

        {/* Skills */}
        <div className="member-profile__section">
          <h2>Skills</h2>

          {memberSkills.length > 0 ? (
            <div className="member-profile__skills-grid">
              {memberSkills.map((skillGroup) => (
                <div
                  className="member-profile__skill-card"
                  key={skillGroup.category}
                >
                  <h3>{skillGroup.category}</h3>

                  <div className="member-profile__skills">
                    {skillGroup.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No skills added yet.</p>
          )}
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