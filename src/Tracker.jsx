import React from "react";
import "./App.css";

export default function Tracker() {
  return (
    <div>
      <h1>Tracker app to keep track of all your applications</h1>
      <form>
        <input className="input" type="text" placeholder="Company"></input>
        <input className="input" type="text" placeholder="Position"></input>
        <input
          className="input"
          type="text"
          placeholder="Requirements for the job"
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Details (maybe pros and cons)"
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Date you submitted the Application"
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Have they replied? if so enter the date here"
        ></input>
      </form>
    </div>
  );
}
