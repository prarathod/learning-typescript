import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
import { Wrapper } from "./Wrapper";

function App() {
  let test1 = [
    {
      type: "email",
      placeholder: "enter your mail",
      required: true,
      para: `This is a simple email input field.`,
    },
    {
      type: "password",
      placeholder: "enter your password",
      required: true,
      para: `This is a simple email input field.`,
    },
    {
      type: "text",
      placeholder: "enter your Name",
      required: true,
      para: `This is a simple email input field.`,
    },
  ];
  return (
    <div className="App">
      <Wrapper
        component={Home}
        options={test1}
        reqObj={{
          type: "email",
          placeholder: "enter your Name",
          required: true,
          para: `This is a simple email input field.`,
        }}
      />
    </div>
  );
}

export default App;
