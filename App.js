import React from "react";
import ReactDOM from "react-dom/client"


const heading = React.createElement("h2", { id: "heading" }, "Hello From React!");
const Jsxheading = () => {
    return (
        <>
            <h1>hello!</h1>

        </>
    )
};

const ele = <span>Hello React Element</span>

function Heading() {
    return (
        <>
            {ele}
            {heading}
            <Jsxheading />
            <h2>Hello React Functional Component!</h2>
        </>

    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);


