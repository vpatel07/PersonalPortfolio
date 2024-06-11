import React from "react";

const Project = ({ title, description, imageLink, projectLink }) => {
  return (
    <div className="text-center bg-neutral-800/[.5] rounded-xl border-opacity-50 shadow-2xl p-10 mb-10">
      <div className="flex items-center justify-center h-48 overflow-hidden transition transform bg-gray-300 border-opacity-50 rounded-lg shadow-2xl hover:scale-105">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          {imageLink && (
            <img
              src={imageLink}
              alt={title}
              className="transition duration-200 transform hover:grayscale h-fill w-fill hover:scale-105"
            />
          )}
        </a>
      </div>
      <h2 className="m-5 font-mono text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Project;
