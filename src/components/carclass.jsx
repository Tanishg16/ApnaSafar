import React from "react";
import Middletittle from "./middletittle";
import { FaCar, FaTaxi } from "react-icons/fa";
const carClass = [
  {
    title: "Economy Class ",
    Middletittle: "Sedan",
    content:"Apna Safar Tour & Travels has many car options. But, Sedan is one of the best cab for everyone, and it can be most reliable and under your budget.",
    carPrice: "Price-12Rs",
    icon: FaCar,
  },
  {
    title: "Standard Class",
    Middletittle: "SUV",
    content:"A standard car SUV in Apna Safar Tour & Travels a great option for those who need transportation to and from work, events, or other important engagements.",
    carPrice:"Price-14Rs",
    icon: FaTaxi,
  },
  {
    title: "Business Class",
    Middletittle: "Luxury",
    content: "Apna Safar Tour & Travels offers affordable luxurious and comfortable ride for businessmen. We make sure that your journey is smooth and hassle-free.",
    carPrice:"Price-40Rs",
    icon: FaCar
  },
];
  const Carclass = () => {
  return (
    <div className="carclass-section">
      <h2 className="carclass-heading">Choose Your Car</h2>
      <h3>Classes and rates for Car Rental Indore</h3>
      <a href="https://wa.me/919301277735" // Replace with actual WhatsApp number
        className="fleet-button"
        target="_blank"
        rel="noopener noreferrer"> CHECK FOR FLEETS</a>
      <div className="carclass-grid">
        {carClass.map((service, index) => (
          <div key={index} className="carclass-card">
            <h3 className="carclass-icon">
              {service.icon && <service.icon size={25} color="orange" />}
            </h3>    
            <h3 className="carclass-title">{service.title}</h3>
            <h5 className="carclass-Mtitle">{service.Middletittle}</h5>
            <p className="carclass-content">{service.content}</p>
            <h5 className="carclass-Mtitle">{service.carPrice}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carclass;