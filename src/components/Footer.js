import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="p-4 text-white bg-test1">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <p className="mt-2">vpatel077375@gmail.com | +1 (862) 284 7884 </p>
        <div className="mt-2">
          <a
            href="https://github.com/vpatel07"
            className="text-gray-400 hover:text-white"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://www.instagram.com/vanshpat07/?next=%2F"
            className="ml-2 text-gray-400 hover:text-white"
          >
            Instagram
          </a>{" "}
          |
          <a
            href="https://www.linkedin.com/in/vansh-patel-087800226/"
            className="ml-2 text-gray-400 hover:text-white"
          >
            LinkedIn
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}
