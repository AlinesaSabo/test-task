import React, { useState } from "react";
import s from "./SectionPeople.module.css";
import people1 from "../../assets/image/people/people1.png";
import people2 from "../../assets/image/people/people2.png";
import people3 from "../../assets/image/people/people3.png";
import people4 from "../../assets/image/people/people4.png";
import people5 from "../../assets/image/people/people5.png";
import people6 from "../../assets/image/people/people6.png";
import star1 from "../../assets/icon/star/star-img (4).svg";
import star2 from "../../assets/icon/star/star-img (7).svg";
import Etherium from "../../assets/image/fon/Etherium-2 copy 1.png";
import LiteCoin from "../../assets/image/fon/LiteCoin-2.png";

const items = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.`,
    name: "Lorem ipsum",
    image: people3,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.`,
    name: "Lorem ipsum",
    image: people1,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor  sit amet",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.`,
    name: "Lorem ipsum",
    image: people2,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.`,
    name: "Lorem ipsum",
    image: people4,
  },
  {
    id: 5,
    title: "Lorem ipsum",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.`,
    name: "Lorem ipsum",
    image: people5,
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.`,
    name: "Lorem ipsum",
    image: people6,
  },
];

const SectionPeople = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className={s.section} id="faqs">
      <div className={s.container}>
        <div className={s.sidebar}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`${s.menuItem} ${
                activeId === item.id ? s.active : ""
              }`}
              onClick={() => setActiveId(item.id)}
            >
              <img src={item.image} alt="image" className={s.avatar} />
              {item.title}
            </div>
          ))}
        </div>

        <div className={s.content}>
          <h3>{items.find((item) => item.id === activeId).title}</h3>
          {items
            .find((item) => item.id === activeId)
            ?.text.split("\n\n")
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          <h5>{items.find((item) => item.id === activeId).name}</h5>
        </div>
      </div>
      <img src={star1} alt="star1" className={s.star1} />
      <img src={star2} alt="star2" className={s.star2} />
      <img src={Etherium} alt="Etherium" className={s.Etherium} />
      <img src={LiteCoin} alt="LiteCoin" className={s.LiteCoin} />
    </section>
  );
};

export default SectionPeople;
