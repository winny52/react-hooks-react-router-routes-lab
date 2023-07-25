import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsDiv = actors.map((item, index) => {
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
      <h1>Actors Page</h1>
      {actorsDiv}
    </div>
  );
}

export default Actors;
