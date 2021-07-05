import React, { useState } from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
// import Counter from "./Counter";
// import Internet from "./Internet";

// const Fruits = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Mango"),
//     React.createElement("h1", {}, "Banana"),
//     React.createElement("h1", {}, "Apple"),
//     React.createElement("h1", {}, "Lichi"),
//   ]);
// };

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     // ...[1, 2, 3, 4].map(i => React.createElement("h2", {}, i)),
//     React.createElement(Pet, {
//       name: "Luna??????",
//       animal: "Dog",
//       breed: "Havanese",
//     }),

//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),

//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaten Terrier",
//     }),
//     // React.createElement(Fruits),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" /> */}
      <SearchParams />
      {/* <Counter />
      <Internet /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
