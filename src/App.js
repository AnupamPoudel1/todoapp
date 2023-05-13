import './App.css';
import TodoWrapper from './Components/TodoWrapper';

function App() {
  return (
    <div className="App flex justify-center items-center flex-col m-10">
    <h1 className='text-white text-xl'>Todo List</h1>
      <TodoWrapper />
    </div>
  );
}

export default App;
