import logo from './logo.svg';
import './App.css';

function App() {

  const handleToggleChange = (event) => {
    alert("test")
    console.log('Toggle changed:', event.detail);
  };

  const handleCheckboxChange = (event) => {
    console.log('Checkbox changed:', event.detail);
  };

  return (
   
    <div className="App">
      <my-toggle 
        className="my-toggle"
        id="toggle1"
        data-testid="toggle-test"
        label="Toggle Label"
        onChange={handleToggleChange}
        checked={true}
        name="toggle"
        value="1"
        disabled={false}
      />
      <my-checkbox 
        className="my-checkbox"
        id="checkbox1"
        data-testid="checkbox-test"
        label="Checkbox Label"
        onChange={handleCheckboxChange}
        checked={true}
        name="checkbox"
        value="1"
        disabled={false}
      />
  
    </div>
  );
}

export default App;
