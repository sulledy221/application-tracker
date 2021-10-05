import React from "react";
import "./App.css";
import { useState } from "react";

export default function Tracker({ addApp }) {
  const [text, setText] = useState();
  const handleOnClick = () => {
    addApp({ title: text, complete: false });
    setText("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Tracker app to keep track of all your applications</h1>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={({ target: { value } }) => setText(value)}
          className="input"
          placeholder="Company"
        ></input>
        <input
          value={text}
          onChange={({ target: { value } }) => setText(value)}
          className="input"
          placeholder="Position"
        ></input>
        <input
          value={text}
          onChange={({ target: { value } }) => setText(value)}
          className="input"
          placeholder="Requirements for the job"
        ></input>
        <input
          value={text}
          onChange={({ target: { value } }) => setText(value)}
          className="input"
          placeholder="Details (maybe pros and cons)"
        ></input>
        <input
          value={text}
          onChange={({ target: { value } }) => setText(value)}
          className="input"
          placeholder="Date you submitted the Application"
        ></input>
        <input
          value={text}
          onChange={({ target: { value } }) => setText(value)}
          className="input"
          placeholder="Have they replied? if so enter the date here"
        ></input>
        <button type="submit" onClick={handleOnClick}>
          Add This Application
        </button>
      </form>
    </div>
  );
}
