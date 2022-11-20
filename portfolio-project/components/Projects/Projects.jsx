import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectOne from "../../public/assets/projects/realEstateProject.png";
import ProjectTow from "../../public/assets/projects/fithness_project.png";

function Projects() {
  return (
    <div id="projects" className="project-container w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase">Projects</p>
        <h2 className="py-4">Check out some of my projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="java script vanilla "
            backgroundImg={ProjectOne}
            projectUrl="/property"
          />
          <ProjectItem
            title="React fitness project"
            backgroundImg={ProjectTow}
            projectUrl="/property"
          />
          <ProjectItem
            title="java script vanilla "
            backgroundImg={ProjectOne}
            projectUrl="/property"
          />
          <ProjectItem
            title="java script vanilla "
            backgroundImg={ProjectOne}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
