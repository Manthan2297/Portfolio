import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiAngular,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiSpringboot,
  SiFirebase,
  SiJavascript,
  SiDocker,
} from "react-icons/si";
import "./About.css";

const About = () => {
  const skills = [
    { icon: <FaReact size={40} />, name: "React" },
    { icon: <SiAngular size={40} />, name: "Angular" },
    { icon: <FaNodeJs size={40} />, name: "Node.js" },
    { icon: <SiSpringboot size={40} />, name: "Spring Boot" },
    { icon: <SiJavascript size={40} />, name: "JavaScript" },
    { icon: <FaPython size={40} />, name: "Python" },
    { icon: <FaJava size={40} />, name: "Java" },
    { icon: <FaGitAlt size={40} />, name: "Git" },
    { icon: <SiMysql size={40} />, name: "MySQL" },
    { icon: <SiPostgresql size={40} />, name: "PostgreSQL" },
    { icon: <SiMongodb size={40} />, name: "MongoDB" },
    { icon: <SiDjango size={40} />, name: "Django" },
    { icon: <SiDocker size={40} />, name: "Docker" },
    { icon: <SiFirebase size={40} />, name: "Firebase" },
    { icon: <FaMicrosoft size={40} />, name: "Azure" },
  ];

  const certifications = [
    "AWS Certified Solutions Architect – Associate",
    "Microsoft Certified: Azure Fundamentals",
    "Google Associate Cloud Engineer",
    "Certified Kubernetes Administrator (CKA)",
    "Oracle Certified Java Programmer (OCPJP)",
  ];

  const subjects = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps Practices",
  ];

  const stats = [
    { value: "2+", label: "Years of Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "4+", label: "Certifications Achieved" },
    { value: "3+", label: "Technologies Mastered" },
    { value: "95%", label: "Client Satisfaction Rate" },
    { value: "4+", label: "Programming Languages Expertise" },
    { value: "3K+", label: "Lines of Code Written" },
  ];

  return (
    <div>
      <section className="about-section">
        <div className="about-intro">
          <h2>About Me</h2>
          <h3>
            Hi! I am a <strong>Software Engineer</strong> with{" "}
            <strong>2+ years of experience</strong>
            in full-stack development, cloud computing, and DevOps. My passion
            lies in solving complex problems, building scalable applications,
            and continuously learning cutting-edge technologies.
          </h3>
        </div>

        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h2>Certifications</h2>
          <ul className="certifications-list">
            {certifications.map((certification, index) => (
              <li key={index} className="certification-item">
                🏆 {certification}
              </li>
            ))}
          </ul>
        </div>

        <div className="subjects-section">
          <h2>Core Subjects</h2>
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <div key={index} className="subject">
                📘 {subject}
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <h2>Professional Summary</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat" key={index}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
