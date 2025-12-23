import React, { useState, use } from "react";
const Middletittle = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [name, setName] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [contact, setContact] = useState("");
  const [CarType, setCarType] = useState("");
  const handleSubmit = () => {
    if (!name || !selectedDate || !contact || !currentTime || !CarType) {
      alert("Please fill out all fields.");
      return;
    }

    // Construct a detailed message with all the collected data
    const message =
      `Hello, I'd like to make an inquiry :Name: ${name}, Selected Date: ${selectedDate},Contact: ${contact},Time: ${currentTime}Car Type: ${CarType}  Thank you!
    `.trim(); // .trim() removes leading/trailing whitespace

    // Encode the entire mess    console.log(
    const encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp URL with the encoded message
    const url = `https://wa.me/+918962976610?text=${encodedMessage}`;   // owner number 

    // Open the WhatsApp chat in a new tab
    window.open(url, "_blank");

    // Provide a success alert to the user
    alert(`Thank you! Your inquiry has been successfully sent.`);
  };

  return (
    <div className="middle-box">
      <div>
        <h2 className="outerContent">
          Book Cab from Us for a Reliable & Comfortable Journey
        </h2>
        <h5 className="innerContent">
          One Way Cab | Outstation Cab Corporate Cab | Airport Cab | Cab Service
          in Indore
        </h5>
        <div className="input-row">
          <div className="time-wrapper">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="text-input"
            />
          </div>
          <div className="time-wrapper">
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="date-input"
            />
          </div>
          <div className="time-wrapper">
            <input
              type="tel"
              id="contact"
              value={contact}
              className="contact-input"
              onChange={(e) => setContact(e.target.value)}
              placeholder="contact number"
            />
          </div>
          <div className="time-wrapper">
            <input
              type="time"
              id="time"
              value={currentTime}
              onChange={(e) => setCurrentTime(e.target.value)}
              className={`time-input ${!currentTime ? "empty" : ""}`}
            />
            {!currentTime && <span className="custom-placeholder">Time</span>}
          </div>
          <select
            value={CarType}
            onChange={(e) => setCarType(e.target.value)}
            className="car-input"
          >
            <option value="Car Type">Car Type</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Luxury">Luxury</option>
            <option value="Tempo Traveller">Tempo Traveller </option>
          </select>
        </div>
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Middletittle;
