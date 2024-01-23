"use client";
import React, { useState, useEffect } from "react";
import projectsData from "../data/projectsData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectDetailPopup from "../components/ProjectDetailPopup";

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleProjectClick = (project) => {
    setCurrentProject(project);
    setShowPopup(true);
  };

  useEffect(() => {
    setFilteredProjects(
      selectedTech
        ? projectsData.filter((project) =>
            project.technologies.includes(selectedTech)
          )
        : projectsData
    );
  }, [selectedTech]);

  return (
    <div>
      <Header />
      <div className="bg-blue-100 text-center p-10 animate-fadeIn">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-subheading leading-normal">
          Projects
        </h1>
        <p className="mb-8 text-body md:w-2/3 p-3 text-md md:text-lg lg:text-lg mx-auto w-9/10 leading-relaxed">
          Welcome to the Projects page. This is where innovation meets
          execution. Explore our diverse portfolio of projects, each
          representing a journey of creativity, problem-solving, and
          collaboration. From concept to completion, we take pride in every
          endeavor, and here you have the opportunity to dive into the details
          of each project.
        </p>
      </div>

      <div className="p-4 md:p-8 animate-slideInLeft">
        <div className="flex flex-nowrap overflow-x-auto mb-8 justify-center w-full sm:w-9/10">
          <button
            onClick={() => setSelectedTech("")}
            className="m-2 bg-blue-100 px-2 py-2 rounded shadow text-blue-500 hover:bg-blue-200"
          >
            All Projects
          </button>
          {Array.from(
            new Set(projectsData.flatMap((project) => project.technologies))
          ).map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className="m-2 bg-blue-100 px-3 py-1 rounded shadow text-sm text-blue-500 hover:bg-blue-200"
            >
              {tech}
            </button>
          ))}
        </div>
        <div className="sm:w-2/3 md:w-3/4 w-4/5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.name}
                onClick={() => handleProjectClick(project)}
                className="p-4 rounded shadow flex flex-col justify-between transform transition-transform duration-500 hover:scale-105 cursor-pointer"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-2">
                    {project.technologies.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => setSelectedTech(tech)}
                        className="text-blue-500 hover:underline"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showPopup && currentProject && (
        <ProjectDetailPopup
          project={currentProject}
          onClose={() => setShowPopup(false)}
        />
      )}

      <Footer />
    </div>
  );
}
