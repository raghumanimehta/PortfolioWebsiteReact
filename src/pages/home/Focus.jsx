import React from "react";
import "./styles/Focus.css";

export default function Focus() {
  return (
    <section className="focus-section content-section">
      <div className="section-kicker">What I'm working on</div>
      <h2>From motor control to systems security.</h2>
      <p>
        My current work at Red Rabbit Robotics focuses on motor-control interfaces,
        motion trajectories, and hardware communication. Previously, I explored
        confidential computing and memory access protection at <a href="https://systopia.cs.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC Systopia Lab</a>.
      </p>
    </section>
  );
}
