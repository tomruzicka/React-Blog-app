import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:3000/blogs/" + blog.id, { method: "DELETE" }).then(
      () => {
        history.push("/");
      }
    );
  };

  return (
    <div className="blog-details">
      {isPending && <div className="loader">Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Written by <strong>{blog.author}</strong>
          </p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
