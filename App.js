{/* <div parent>
    <div child>
        <h1></h1>
    </div>
</div> */}
import React from "react";
import ReactDOM from "react-dom/client"
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h2", { id: "heading" }, "Hello From React!"), React.createElement("h3", { id: "heading" }, "Hello From React2!")), React.createElement("div", { id: "child" },
            React.createElement("h2", { id: "heading" }, "Hello From React!"), React.createElement("h3", { id: "heading" }, "Hello From React2!")));
// react.createElement will return one object and render method will take this object and create 
// tag andd add it into dom
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
