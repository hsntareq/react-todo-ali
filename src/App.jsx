import logo from './logo.svg';
import './App.css';
import Count from './Count.jsx';
import TodoMain from './TodoMain.jsx';
import TodoClass from './components/TodoClass.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		{/* <Count/> */}
	  {<TodoMain/>}
	  {/* <TodoClass/> */}
      </header>
    </div>
  );
}

export default App;
