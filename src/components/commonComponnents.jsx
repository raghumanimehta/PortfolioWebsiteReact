// Tech icon mapping
import { SiPython, SiC, SiNodedotjs, SiTypescript, SiGit, SiCplusplus, SiRust, SiJavascript, SiPostgresql, SiExpress, SiSpringboot, SiDocker, SiRos, SiGithubactions, SiAmazon } from 'react-icons/si';
import { FaLeaf, FaRobot, FaFlask, FaNetworkWired, FaPlug, FaCodeBranch, FaGears, FaLinux } from 'react-icons/fa6';

export const techIcons = {
  'Python': <SiPython className="tech-icon" title="Python" />,
  'C': <SiC className="tech-icon" title="C" />,
  'C++': <SiCplusplus className="tech-icon" title="C++" />,
  'Rust': <SiRust className="tech-icon" title="Rust" />,
  'Java': <SiAmazon className="tech-icon" title="Java" />,
  'JavaScript': <SiJavascript className="tech-icon" title="JavaScript" />,
  'Node.js': <SiNodedotjs className="tech-icon" title="Node.js" />,
  'TypeScript': <SiTypescript className="tech-icon" title="TypeScript" />,
  'Git': <SiGit className="tech-icon" title="Git" />,
  'Express': <SiExpress className="tech-icon" title="Express" />,
  'Spring Boot': <SiSpringboot className="tech-icon" title="Spring Boot" />,
  'Docker': <SiDocker className="tech-icon" title="Docker" />,
  'ROS': <SiRos className="tech-icon" title="ROS" />,
  'GitHub Actions': <SiGithubactions className="tech-icon" title="GitHub Actions" />,
  'SQL': <SiPostgresql className="tech-icon" title="SQL" />,
  'AWS Textract': <SiAmazon className="tech-icon" title="AWS Textract" />,
  'AWS Lambda': <SiAmazon className="tech-icon" title="AWS Lambda" />,
  'AWS S3': <SiAmazon className="tech-icon" title="AWS S3" />,
  'AWS SQS, SNS': <SiAmazon className="tech-icon" title="AWS SQS, SNS" />,
  'AWS RDS': <SiAmazon className="tech-icon" title="AWS RDS" />,
  'Linux/Unix, POSIX': <FaLinux className="tech-icon" title="Linux/Unix, POSIX" />,
  'Leadership': <FaLeaf className="tech-icon" title="Leadership" />,
  'Navigation Algorithms': <FaRobot className="tech-icon" title="Navigation Algorithms" />,
  'Testing': <FaFlask className="tech-icon" title="Testing" />,
  'Networking': <FaNetworkWired className="tech-icon" title="Networking" />,
  'Socket Programming': <FaPlug className="tech-icon" title="Socket Programming" />,
  'Network Protocols': <FaNetworkWired className="tech-icon" title="Network Protocols" />,
  'REST API': <FaCodeBranch className="tech-icon" title="REST API" />,
  'Full-Stack': <FaGears className="tech-icon" title="Full-Stack" />,
  'CI/CD': <FaGears className="tech-icon" title="CI/CD" />,
  'Mentorship': <FaLeaf className="tech-icon" title="Mentorship" />,
  'Time Management': <FaGears className="tech-icon" title="Time Management" />,
  'JUnit': <FaFlask className="tech-icon" title="JUnit" />,
  'Mocha/Chai': <FaFlask className="tech-icon" title="Mocha/Chai" />,
  'Pytest': <FaFlask className="tech-icon" title="Pytest" />,
  'GDB, Valgrind': <FaFlask className="tech-icon" title="GDB, Valgrind" />,
};

export function TechTag({ tech }) {
  return (
    <span className="course-tag">
      {techIcons[tech] && <span className="icon-wrapper">{techIcons[tech]}</span>}
      {tech}
    </span>
  );
}
