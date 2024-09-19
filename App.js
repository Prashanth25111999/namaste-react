const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "hi"),
        React.createElement("h2", {}, "hello"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h3", {}, "Javascript"),
        React.createElement("h4", {}, "React"),
    ]),
]);

console.log(parent);

const rootId = ReactDOM.createRoot(document.getElementById("root"));
rootId.render(parent);
