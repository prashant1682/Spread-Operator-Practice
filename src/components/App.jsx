import React, { useState } from "react";

function App() {
  // Creating an constant to save the value in the input text and using the state
  const [inputText, setInputtext] = useState("");
  //Creating an items array to render the list in the bottom
  const [items, setItems] = useState([]);

  // on update on the value in the text box , the value will be saved in newValue constant
  function handleOnChange(event) {
    const newValue = event.target.value;
    setInputtext(newValue);
  }

  function handleOnclick() {
    setItems(function (prevValue) {
      return [inputText, ...prevValue];
    });
    setInputtext("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleOnChange} type="text" value={inputText} />
        <button onClick={handleOnclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(function (todoItems) {
            return <li>{todoItems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
