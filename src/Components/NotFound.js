import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>
        Sorry <span>&#10006;</span>
      </h2>
      <p>That page cannot be found</p>
      &#10095; <Link to="/">Back to the homepage</Link> &#10094;
    </div>
  );
};

export default NotFound;
