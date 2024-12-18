import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const contactDetails = [
  {
    id: 1,
    icon: <FaPhone />,
    title: "Phone",
    content: "+1 872 275 6615",
    link: "tel:+8722756615",
    linkText: "Call Now",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    title: "Email",
    content: "manthanmohile@gmail.com",
    link: "mailto:manthanmohile@gmail.com",
    linkText: "Send Email",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: "Location",
    content: "Chicago, IL",
    link: "https://www.google.com/maps?q=Chicago",
    linkText: "View Map",
  },
];

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact</h1>
      <p className="contact-subtitle">Let’s connect and collaborate!</p>
      <div className="contact-cards">
        {contactDetails.map((item) => (
          <div key={item.id} className="contact-card">
            <div className="contact-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <a href={item.link} target="_blank" className="contact-btn">
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
