import React, { useEffect, useState } from "react";

const TrustSection = () => {
  const [customers, setCustomers] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [vehicles, setVehicles] = useState(0);

  useEffect(() => {
    const customersTarget = 10000;
    const satisfactionTarget = 100;
    const vehiclesTarget = 50;

    const speed = 30;

    const customersInterval = setInterval(() => {
      setCustomers((prev) =>
        prev < customersTarget ? prev + 100 : customersTarget
      );
    }, speed);

    const satisfactionInterval = setInterval(() => {
      setSatisfaction((prev) =>
        prev < satisfactionTarget ? prev + 1 : satisfactionTarget
      );
    }, 40);

    const vehiclesInterval = setInterval(() => {
      setVehicles((prev) =>
        prev < vehiclesTarget ? prev + 1 : vehiclesTarget
      );
    }, 60);

    return () => {
      clearInterval(customersInterval);
      clearInterval(satisfactionInterval);
      clearInterval(vehiclesInterval);
    };
  }, []);

  return (
    <section className="trust-section">
      <h2 className="trust-title">Why Customers Trust Us</h2>
      <p className="trust-subtitle">
        Reliable service, professional drivers & transparent pricing
      </p>

      <div className="trust-container">
        <div className="trust-box">
          <h3>{customers}+</h3>
          <h4>Happy Customers</h4>
          <p>
            Trusted by thousands of customers for safe and comfortable travel.
          </p>
        </div>

        <div className="trust-box">
          <h3>{satisfaction}%</h3>
          <h4>Customer Satisfaction</h4>
          <p>
            We focus on punctuality, safety, and excellent customer experience.
          </p>
        </div>

        <div className="trust-box">
          <h3>{vehicles}+</h3>
          <h4>Well-Maintained Vehicles</h4>
          <p>Clean, comfortable and AC vehicles for all travel needs.</p>
        </div>
        <div className="trust-box">
          <h3 className="support-jump">24/7
          </h3>
          <h4>Customer Support</h4>
          <p>
            <a
              href="tel:+919301277735"
              className="support-link"
            >
              Contact Now +919301277735
            </a>
          </p>
           <p>
            <a
              href="mailto:tanish.g930@gmail.com"
              className="support-link"
            >
              Email Support : shreeramtourtravel@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
