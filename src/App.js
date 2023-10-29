import './App.css';
import { ToDoList } from './ToDoList';
import icon from './icon.png'

function App() {
  return (
    <div className="Container">
    <div className="App">
      <div className="purple">
        <img className="Icon" src={icon} alt="to do list"/>
        <h1>To Do List</h1>
        <p>{new Date().toLocaleDateString("en-US")}</p>
      </div>
      <ToDoList />
    </div>
    </div>
  );
}

export default App;
