import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDiv = movies.map((item, index) => {
    return (
      <div key={index}>
        <h2>Name: {item.title}</h2>
        <p>Time: {item.time}</p>
        <p>Genres:</p>
        <ul>
          {item.genres.map((gen, index) => {
            return <li key={index}>{gen}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDiv}
    </div>
  );
}

export default Movies;
