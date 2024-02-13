// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  const minValue = 5;
  const maxValue = 10;
  const message = 'Enter Age';

  return (
    <input
      type="number"
      min={minValue}
      max={maxValue}
      style={{ border: '3px solid red' }} // Objects - Wrap with curly braces
      list={[1, 2, 3]} // Arrays - Wrap with curly braces
      alt={message} // Variables - Wrap with curly braces
    />
  );
}

// 5) Show the component on the screen
root.render(<App />);
