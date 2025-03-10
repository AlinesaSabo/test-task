import React, { useState } from "react";
import s from "./SectionPeople.module.css"; // Импортируем стили как модуль

const items = [
  { id: 1, title: "Lorem ipsum dolor sit amet", text: "Описание для пункта 1" },
  { id: 2, title: "Lorem ipsum dolor", text: "Описание для пункта 2" },
  { id: 3, title: "Lorem ipsum dolor", text: "Описание для пункта 3" },
  { id: 4, title: "Lorem ipsum dolor", text: "Описание для пункта 4" },
  { id: 5, title: "Lorem ipsum dolor", text: "Описание для пункта 5" },
];

const SectionPeople = () => {
  const [activeId, setActiveId] = useState(1); // Состояние для активного элемента

  return (
    <section className={s.section}>
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
              <span className={s.avatar}>👤</span>
              {item.title}
            </div>
          ))}
        </div>

        <div className={s.content}>
          <h2>{items.find((item) => item.id === activeId).title}</h2>
          <p>{items.find((item) => item.id === activeId).text}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionPeople;
