import React from "react";
import CardTeam from "../CardTeam/CardTeam";
import s from "./Team.module.css";
import teamMembers from "../../data/team.json";

const Team = () => {
  return (
    <section>
      <div className={s.team}>
        {teamMembers.map((member) => (
          <CardTeam key={member.id} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
