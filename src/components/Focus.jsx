import React from "react";
import "./styles/Focus.css";

const focusAreas = [
  "Systems software",
  "Operating systems",
  "Embedded software",
  "Robotics",
  "Networking",
  "Secure computing"
];

export default function Focus() {
  return (
    <section className="focus-section content-section">
      <div className="section-kicker">Recent Interests</div>
      <h2>Systems, robotics, backend infrastructure, and networking.</h2>
      <p>
        I am especially interested in systems software, operating systems,
        embedded software, robotics, networking, and secure computing.
      </p>
      <p>
        My recent work focuses on Linux memory management, userfaultfd,
        autonomous path planning, and reliable networked systems.
      </p>
      <div className="focus-tags" aria-label="Research and engineering focus areas">
        {focusAreas.map((area) => (
          <span key={area}>{area}</span>
        ))}
      </div>
    </section>
  );
}
