/**
 * Members Page
 *
 * Displays all team members.
 */

import { useTranslation } from "react-i18next";
import { members } from "../../data/members";
import MemberCard from "../../components/cards/MemberCard/MemberCard";

function Members() {
  const { t } = useTranslation();

  return (
    <section className="page">
      <div className="container">

        <h1>{t("pages.members.title")}</h1>

        <p>{t("pages.members.description")}</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Members;