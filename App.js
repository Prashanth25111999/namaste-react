import React from "react";
import ReactDOM from "react-dom/client"

const JSXheading = <h2 id="heading">Hello From JSX!</h2>
const heading = React.createElement("h2", { id: "heading" }, "Hello From React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>{JSXheading}{heading}</>);


