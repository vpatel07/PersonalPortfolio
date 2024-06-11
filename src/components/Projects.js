import React from "react";
import Project from "./Project";

const Projects = () => {
  var description1 =
    "I made a game that used C# and Unity to create a game that is endless and simulates the popular game flappy bird. This game uses random pipe generation that makes the game endless and keeps a constant score.";

  const projectData = [
    {
      title: "Unity - Flappy Bird Game",
      description: description1,
      imageLink:
        "Screenshot 2024-06-11 at 11.09.40 AM.png",
      projectLink: "https://github.com/vpatel07/GameJam-Alblas/tree/master",
    },
    {
      title: "Bobotique",
      description:
        "This project showcases the basics of programming that I have learned throughout my sophmore year. Implemented through a react website, this project displays the use of OOP through the use of React Components.",
      imageLink: "Screenshot 2024-06-09 at 12.39.34 AM.png",
      projectLink: "https://github.com/Nishit-Sharma/bobotique-github-athon",
    },
    {
      title: "Library Project",
      description:
        "This is a program coded in C++ that demonstrates a library catalouge. This program utilizes classes and vectors to help construct a complete catalouge system in the console.",
      imageLink: "Screenshot 2024-06-09 at 12.40.38 AM.png",
      projectLink: "https://github.com/vpatel07/Library-Project",
    },
  ];

  return (
    <section id="projects" className="container px-6 py-10 mx-auto">
      <h2 className="p-8 text-4xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageLink={project.imageLink}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
