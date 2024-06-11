import React from "react";

export default function Profile() {
  return (
    <section
      id="profile"
      className="container flex flex-col items-center px-6 py-10 mx-auto space-y-6 md:flex-row md:items-start md:space-y-0 md:space-x-8"
    >
      <div className="flex justify-center w-full md:w-1/3 md:justify-start">
        <img
          src="IMG_3932.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full md:w-48 md:h-48"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h1 className="text-xl font-bold text-center md:text-2xl md:text-left">
          Hi! My name is Vansh and I am currently an avid programmer attending
          the Computer & Information Sciences Academny at the Morris County
          School of Technology! I am a very versatile developer who can code in
          many languages! I currently want to be a computer/hardware engineer.
          Below are a few of the projects that I have created as well as ways to
          contact me.
        </h1>
      </div>
    </section>
  );
}
