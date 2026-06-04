import React from "react";
import "./styles/Contact.css";
import resume from "../assets/Mehta_Raghumani_resume_systems.pdf";

const contactItems = [
  {
    label: "Email",
    value: "raghumani2003@outlook.com",
    href: "mailto:raghumani2003@outlook.com"
  },
  {
    label: "GitHub",
    value: "github.com/raghumanimehta",
    href: "https://github.com/raghumanimehta"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mehta-raghu",
    href: "https://www.linkedin.com/in/mehta-raghu"
  },
  {
    label: "Location",
    value: "Vancouver, BC"
  },
  {
    label: "Availability",
    value: "Fall 2026 co-op"
  }
];

export default function Contact() {
  return (
    <section className="contact-section content-section">
      <div>
        <div className="section-kicker">Contact</div>
        <h2>Let&apos;s talk systems, robotics, backend, or networking roles.</h2>
      </div>
      <div className="contact-grid">
        {contactItems.map((item) => (
          <div key={item.label} className="contact-item">
            <span>{item.label}</span>
            {item.href ? (
              <a href={item.href} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
                {item.value}
              </a>
            ) : (
              <strong>{item.value}</strong>
            )}
          </div>
        ))}
      </div>
      <a className="primary-link contact-resume" href={resume} target="_blank" rel="noopener noreferrer">
        View Resume
      </a>
    </section>
  );
}
