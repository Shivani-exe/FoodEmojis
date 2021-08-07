import "./styles.css";
import React, { useState } from "react";

const foodDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar"
};
var foodpedia = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = foodDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this food Item in our database";
    }
    setMeaning(meaning);
  }
  function onClickHandler(emoji) {
    var foodEmoji = foodDictionary[emoji];
    setMeaning(foodEmoji);
  }

  return (
    <div className="App">
      <h1>
        <em>Fun-Food Emoji</em>
      </h1>

      <input onChange={onChangeHandler} />
      <div className="meaning">{meaning}</div>
      {foodpedia.map(function (emoji) {
        return (
          <span
            style={{
              fontSize: "1.5rem",
              padding: "0.5em",
              cursor: "pointer",
              color: "black"
            }}
            onClick={() => onClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
