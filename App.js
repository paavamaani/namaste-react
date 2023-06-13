import React from 'react';
import ReactDOM from 'react-dom/client';

// Creating element using React.createElement

// const element = React.createElement(
//     "div",
//     {className: "parent"},
//     React.createElement(
//         "div",
//         {className: "child"},
//         [
//             React.createElement(
//                 "h1",
//                 {className: "heading-1"},
//                 "Namaste React"
//             ),
//             React.createElement(
//                 "h2",
//                 {className: "heading-2"},
//                 "Let's do the tasks"
//             )
//         ] 
//     )
// );

const Heading = () => {
    return (
        <>
            <h1 className='heading-1'>
                Namaste React
            </h1>
            <h2 className='heading-2'>
                Let's do it Paavamaani
            </h2>
        </>
    )
};

const App = () => {
    return (
        <div className='app'>
            <Heading />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);