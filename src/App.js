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

export default App;
