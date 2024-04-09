import React, { useState } from "react";

export default function App(props) {
  const [enteredWord, setEnteredWord] = useState("");
  const [definition, setDefinition] = useState("");

  const wordDictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const inputChangeHandler = (e) => {
    setEnteredWord(e.target.value);
  };

  const searchHandler = () => {
    for (let wordObj of wordDictionary) {
      console.log(wordObj);

      if (wordObj.word.toLowerCase() === enteredWord.toLowerCase()) {
        setDefinition(wordObj.meaning);
        return;
      }
    }
    setDefinition("Word not found in the dictionary.");
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        onChange={inputChangeHandler}
        value={enteredWord}
      />
      <button onClick={searchHandler}>Search</button>
      <h3>Definition:</h3>
      {definition && <p>{definition}</p>}
    </div>
  );
}
