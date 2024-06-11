import React from "react";

export default function Header() {
  return (
    <nav className="!sticky bg-opacity-50 top-0 !shadow-xl backdrop-blur-md z-50">
      <div className="container items-center p-4 px-6 mx-auto y-3">
        <div className="flex items-center justify-between">
          <a href="#profile" className="text-xl font-bold text-amber-200">
            Vansh Patel
          </a>
          <ul className="flex space-x-4 text-lg text-amber-100">
            <li>
              <a href="#profile">
                <button className="px-2 py-1 space-x-6 transition duration-300 transform rounded hover:bg-neutral-700 hover:shadow-lg">
                  Projects
                </button>
              </a>
            </li>
            <li>
              <a href="#contact">
                <button className="px-2 py-1 space-x-6 transition duration-300 transform rounded hover:bg-neutral-700 hover:shadow-lg">
                  Contact
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
