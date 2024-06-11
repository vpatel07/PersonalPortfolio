import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-600">
      <Header />
      <div className="min-h-screen p-20 ">
        <div className="max-w-screen-xl mx-auto text-amber-200">{children}</div>
      </div>
      <Footer id="contact"/>
    </div>
  );
};

export default Layout;
