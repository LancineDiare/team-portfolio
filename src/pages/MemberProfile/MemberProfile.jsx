/**
 * Member Profile Page
 *
 * Dynamic page for each team member.
 */

import { Link, useParams } from "react-router-dom";

import { members } from "../../data/members";
import { skills } from "../../data/skills";
import { certifications } from "../../data/certifications";
import { timeline } from "../../data/timeline";
import { individualProjects } from "../../data/individualProjects";

import "./MemberProfile.css";

function MemberProfile() {
  const { memberId } = useParams();

  // Find selected member from URL parameter
  const member = members.find((item) => item.id === memberId);

  // Prevent blank page if member does not exist
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

  // Get related data after member is confirmed
  const memberSkills = skills.filter((skill) => skill.ownerId === memberId);

  const memberCertifications = certifications.filter(
    (certification) => certification.ownerId === memberId
  );

  // Get individual projects owned by selected member
const memberProjects = individualProjects.filter(
  (project) => project.ownerId === memberId
);

  const memberTimeline = timeline.filter((item) => item.ownerId === memberId); // for projects

  return (
    <section className="page">
      <div className="container member-profile">
        {/* Profile Header */}
        <div className="member-profile__header">
          {/* Profile Avatar / Image */}
          {member.profileImage ? (
            <img
              src={member.profileImage}
              alt={`${member.name} profile`}
              className="member-profile__photo"
            />
          ) : (
            <div className="member-profile__avatar">
              {member.initials}
            </div>
          )}

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

        {/* Certifications */}
        <div className="member-profile__section">
          <h2>Certifications</h2>

          {memberCertifications.length > 0 ? (
            <div className="member-profile__certifications">
              {memberCertifications.map((certification) => (
                <article
                  className="member-profile__certification-card"
                  key={certification.title}
                >
                  <h3>{certification.title}</h3>
                  <p>{certification.issuer}</p>
                  <p>{certification.date}</p>

                  <a href={certification.credentialUrl}>View Credential</a>
                </article>
              ))}
            </div>
          ) : (
            <p>No certifications added yet.</p>
          )}
        </div>

        {/* Individual Projects */}
        <div className="member-profile__section">
          <h2>Individual Projects</h2>

          {memberProjects.length > 0 ? (
            <div className="member-profile__projects">
              {memberProjects.map((project) => (
                <article className="member-profile__project-card" key={project.id}>
                  <span>{project.status}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <Link to={`/projects/${project.id}`}>
                    View Project Details
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p>No individual projects added yet.</p>
          )}
        </div>

        {/* Timeline */}
        <div className="member-profile__section">
          <h2>Project Timeline</h2>

          {memberTimeline.length > 0 ? (
            <div className="member-profile__timeline">
              {memberTimeline.map((item) => (
                <article className="member-profile__timeline-item" key={item.title}>
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p className="member-profile__timeline-type">{item.type}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          ) : (
            <p>No timeline added yet.</p>
          )}
        </div>

        {/* Resume */}
        <div className="member-profile__section">
          <h2>Resume</h2>

          {member.resume ? (
            <a
              href={member.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="member-profile__resume-btn"
              download
            >
              Download Resume
            </a>
          ) : (
            <p>No resume uploaded yet.</p>
          )}
        </div>

        {/* Contact and Links */}
        <div className="member-profile__section">
          <h2>Contact and Links</h2>

          <div className="member-profile__contact">
            <p>
              <strong>Email:</strong> {member.email || "Not available yet"}
            </p>

            <p>
              <strong>Location:</strong> {member.location || "Not available yet"}
            </p>

            <p>
              <strong>Availability:</strong>{" "}
              {member.availability || "Not available yet"}
            </p>
          </div>

          <div className="member-profile__links">
            <a href={member.github}>GitHub</a>
            <a href={member.linkedin}>LinkedIn</a>
            <a href={member.portfolio}>Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberProfile;