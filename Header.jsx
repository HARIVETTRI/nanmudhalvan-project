import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="flex justify-between items-center p-5 bg-black bg-opacity-30">
    <h1 className="text-xl font-bold">My Portfolio</h1>
    <nav className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
