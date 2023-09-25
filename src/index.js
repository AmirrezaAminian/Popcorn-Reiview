import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

// import StarRating from "./StarRating";

// function Test(){
//   return <StarRating color="blue" maxRating={10} />
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   {/* <App /> */}
    <StarRating  />
  </React.StrictMode>
);
