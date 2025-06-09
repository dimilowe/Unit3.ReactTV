/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import tvShows from "./shows/data.js";
import { useState } from "react";

export default function App() {
  //console.log(tvShows);
  const [show, setShow] = useState(tvShows);

  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main></main>

      {show.map((individualShow) => {
        return (
          <li>
            <h2>{individualShow.name}</h2>

            <p>{individualShow.genre}</p>
          </li>
        );
      })}
    </>
  );
}
