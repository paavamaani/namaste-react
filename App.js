const parent = React.createElement(
    "div",
    {className: "parent"},
    React.createElement(
        "div",
        {className: "child"},
        [
            React.createElement(
                "h1",
                {className: "heading-1"},
                "Namaste React"
            ),
            React.createElement(
                "h2",
                {className: "heading-2"},
                "Let's do the tasks"
            )
        ] 
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);