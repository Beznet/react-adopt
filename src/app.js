import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Puppy",
      animal: "Dog",
      breed: "Lab"
    }),
    React.createElement(Pet, {
      name: "Fart",
      animal: "Dog",
      breed: "Corgi"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Kitten"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
