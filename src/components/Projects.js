import React, { useState } from "react";
import "./Projects.css";
import AmazonCloneVideo from "../Assests/Amazon-Clone.mp4";
import CarRentalVideo from "../Assests/Cart rental.mp4";
import { FaFileDownload } from "react-icons/fa";
import TargetCloneVideo from "../Assests/Target.mp4";

const Projects = () => {
  // State to track the current project index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of project data
  const projects = [
    {
      title: "Amazon Clone",
      description:
        "This is a clone of Amazon. It is built using React, Firebase, and Stripe.",
      techStack:
        "React, Firebase, Stripe, HTML, CSS, JavaScript, Bootstrap, SASS",
      video: AmazonCloneVideo, // Local video file
    },
    {
      title: "Car Rental",
      description:
        "This is a car rental project. It is built using Angular, Spring Boot, and MySQL.",
      techStack: "Angular, Spring Boot, MySQL, HTML, CSS, TypeScript",
      video: CarRentalVideo, // Local video file
    },
    {
      title: "Target Clone",
      description:
        "This is a clone of Target. It is built using Figma, AxureRP, and Adobe XD.",
      techStack: "Figma, AxureRP, Adobe XD",
      video: TargetCloneVideo, // Local video file
    },
    // Add more projects with their respective videos
  ];

  // Function to go to the next project
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Function to go to the previous project
  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="project-section">
      <div className="project-content">
        <div className="project-info">
          <div className="project-number-box">
            <span className="project-number">{`0${currentIndex + 1}`}</span>
          </div>
          <h2 className="project-title">{projects[currentIndex].title}</h2>
          <p className="project-description">
            {projects[currentIndex].description}
          </p>
          <div className="project-tech">
            {projects[currentIndex].techStack
              .split(" , ")
              .map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
          </div>
          <div className="project-actions">
            <a href="#" className="action-btn" title="Documentation">
              <FaFileDownload />

              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className="project-video-wrapper">
          <video
            src={projects[currentIndex].video}
            controls
            className="project-video"
          ></video>
          <div className="project-nav">
            <button
              className="nav-btn prev-btn"
              title="Previous Project"
              onClick={previousProject}
            >
              &lt;
            </button>
            <button
              className="nav-btn next-btn"
              title="Next Project"
              onClick={nextProject}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
