import React from "react";

export function App(props) {
  const wordDictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  let wordDefinition = "A reusable building block in React.";

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input type="text" placeholder="Search for a word..." />
      <button>Search</button>
      <h3>Definition:</h3>
      <p>{wordDefinition}</p>
      <p>"Word not found in the dictionary."</p>
    </div>
  );
}

// Log to console
console.log("Hello console");
