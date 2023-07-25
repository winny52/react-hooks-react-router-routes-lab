import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsDiv = directors.map((item, index) => {
    return (
      <div key={index}>
        <h2>Name: {item.name}</h2>
        <p>Movies:</p>
        <ul>
          {item.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDiv}
    </div>
  );
}

export default Directors;
