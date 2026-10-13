import React from "react";
import "./styles/Experience.css";
import certificate from "../../assets/acm-sosp-2026-src-certificate.pdf";

const achievements = [
  {
    title: "Selected Presenter — ACM Student Research Competition (SOSP 2026)",
    organization: "Association for Computing Machinery (ACM)",
    date: "Sept 2026",
    description: 'Selected to present “Flexible ORAM-based Mitigation Against Controlled-Channel Attacks” at the ACM Student Research Competition, held in conjunction with SOSP 2026 in Prague, Czech Republic. Received an ACM Certificate of Recognition.',
    links: [
      { label: "Certificate of Recognition", url: certificate },
      { label: "Competition", url: "https://sigops.org/s/conferences/sosp/2026/src.html" }
    ]
  },
  {
    title: "WLIURA Recipient",
    organization: "University of British Columbia",
    date: "2026",
    description: "Received the Work Learn International Undergraduate Research Award (WLIURA), supporting research at UBC Systopia Lab on protecting confidential virtual machines (CVMs) from memory access pattern leakage and controlled-channel attacks.",
    links: [
      { label: "Award program", url: "https://science.ubc.ca/students/undergrad-research/wliura" }
    ]
  },
  {
    title: "Dean’s List",
    organization: "University of British Columbia",
    date: "2024–2025 · 2025–2026",
    description: "Recognized on UBC’s Dean’s List for academic achievement in both 2024–2025 and 2025–2026.",
    links: []
  }
];

export default function Achievements() {
  return (
    <section className="content-section">
      <h2><span className="highlight">Achievements</span></h2>
      <div className="content-list">
        {achievements.map((achievement) => (
          <article key={achievement.title} className="experience-item experience-card">
            <div className="experience-card-header">
              <div className="experience-header">
                <h3>{achievement.title}</h3>
                <p className="company">{achievement.organization}</p>
              </div>
              <p className="date">{achievement.date}</p>
            </div>
            <p className="achievement-description">{achievement.description}</p>
            {achievement.links.length > 0 && (
              <div className="achievement-links" aria-label={`${achievement.title} links`}>
                {achievement.links.map((link) => (
                  <a key={link.label} className="secondary-link" href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
