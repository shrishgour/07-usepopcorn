import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import StartRating from "./StartRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating maxRating={5} />
    <StartRating size={24} color="blue" maxRating={10} defaultRating={3} />
    <StartRating
      className="Test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
  </React.StrictMode>
);
