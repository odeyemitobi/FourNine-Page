import React from "react";
import NavBar from "../components/NavBar/NavBar";

function MainLayout({ children }) {
  return (
    <section className="w-full">
      <NavBar />
      <div className="w-full">{children}</div>
    </section>
  );
}

export default MainLayout;
