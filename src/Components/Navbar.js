import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">Blog App</Link>
      </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className="new-blog">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
