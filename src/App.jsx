import logo from './logo.svg';
import './App.css';
import Count from './Count.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<Count/>
      </header>
    </div>
  );
}

export default App;
