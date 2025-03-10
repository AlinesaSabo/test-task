import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css"; // Импорт стилей для скролла
import CardTeam from "../CardTeam/CardTeam";
import s from "./Team.module.css";
import member1 from "../../assets/image/team/businessmen-internet-technology-commerce-bitcoin-mining-studio-official-removebg-preview.png";
import member2 from "../../assets/image/team/young-african-american-girl-teen-student-denim-clothes-backpack-hold-bitcoin-isolated-blue-wall-min-removebg-preview.png";
import member3 from "../../assets/image/team/portrait-confident-businessman-dressed-suit-removebg-preview.png";
import money from "../../assets/Money.png";
import bg from "../../assets/Looper-3.png";
import bgGradient from "../../assets/bg-gradient-img.png";

const teamMembers = [
  {
    id: 1,
    title: "Member of our expert team",
    image: member1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus",
    card: {
      title: "Lörem ipsum treras dekalig. ",
      description:
        "Lörem ipsum fulparkerare krollipsum diska didebelt respektive spevis plus krofenatipsum ",
    },
  },
  {
    id: 2,
    title: "Member of our expert team",
    image: member2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus",
    card: {
      title: "Lörem ipsum treras dekalig. ",
      description:
        "Lörem ipsum fulparkerare krollipsum diska didebelt respektive spevis plus krofenatipsum ",
    },
  },
  {
    id: 3,
    title: "Member of our expert team",
    image: member3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus",
    card: {
      title: "Lörem ipsum treras dekalig. ",
      description:
        "Lörem ipsum fulparkerare krollipsum diska didebelt respektive spevis plus krofenatipsum ",
    },
  },
];

const Team = () => {
  return (
    <section className={s.section}>
      <div className={s.team}>
        <SimpleBar className={s.scrollContainer}>
          {teamMembers.map((member) => (
            <div key={member.id} className={s.cardWrapper}>
              <CardTeam {...member} />
            </div>
          ))}
        </SimpleBar>
      </div>
      <img src={money} alt="money" className={s.money} />
      <img src={bg} alt="bg" className={s.bg} />
      <img src={bgGradient} alt="bgGradient" className={s.bgGradient} />
    </section>
  );
};

export default Team;
