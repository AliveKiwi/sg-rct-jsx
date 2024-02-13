// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  // let message = 123;            //=> Prints 123
  // let message = 'abc';          //=> Prints abc
  // let message = true;           //=> Shows nothing
  // let message = undefined;      //=> Shows nothing
  // let message = null;           //=> Shows nothing
  // let message = [1, 2, 3];      //=> Prints nothing
  // let message = ['abc', 'def']; //=> Prints abcdef
  // let message = {}              //=> Throws Error, Check error console log

  const date = new Date();
  const time = date.toLocaleTimeString();

  return <h1>{time}</h1>;

  // Another way to do the same thing as above
  // return <h1>{new Date().toLocaleTimeString()}</h1>;
}

// 5) Show the component on the screen
root.render(<App />);
