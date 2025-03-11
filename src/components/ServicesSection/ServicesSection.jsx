import React, { useState, useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import s from "./ServicesSection.module.css";
import servicesData from "../../data/services.json";

const ServiceSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  return (
    <section className={s.serviceSection} id="about">
      <ul className={s.grid}>
        <li className={`${s.listItem} ${s.headerCard}`}>
          <h4>
            Our <br /> Services
          </h4>
          <h2>Our Services for You</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </li>
        {services.map((service) => (
          <li key={service.id} className={s.listItem}>
            <ServiceCard {...service} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceSection;
