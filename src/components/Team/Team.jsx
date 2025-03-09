import React from "react";
import CardTeam from "../CardTeam/CardTeam";
import s from "./Team.module.css";
import member1 from "../../assets/image/team/businessmen-internet-technology-commerce-bitcoin-mining-studio-official-removebg-preview.png";
import member2 from "../../assets/image/team/young-african-american-girl-teen-student-denim-clothes-backpack-hold-bitcoin-isolated-blue-wall-min-removebg-preview.png";
import member3 from "../../assets/image/team/portrait-confident-businessman-dressed-suit-removebg-preview.png";

const teamMembers = [
  {
    id: 1,
    title: "Member of our expert team",
    image: member1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus",
  },
  {
    id: 2,
    title: "Member of our expert team",
    image: member2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus",
  },
  {
    id: 3,
    title: "Member of our expert team",
    image: member3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus",
  },
];

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
