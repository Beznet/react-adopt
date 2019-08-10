import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
