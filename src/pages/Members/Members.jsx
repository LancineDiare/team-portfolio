/**
 * Members Page
 *
 * Displays all team members using reusable MemberCard components.
 */

import { useTranslation } from "react-i18next";

import { members } from "../../data/members";
import MemberCard from "../../components/cards/MemberCard/MemberCard";

import "./Members.css";

function Members() {
  const { t } = useTranslation();

  return (
    <section className="page">
      <div className="container">
        {/* Page Header */}
        <h1>{t("pages.members.title")}</h1>
        <p>{t("pages.members.description")}</p>

        {/* Team Members Grid */}
        <div className="members-grid">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;