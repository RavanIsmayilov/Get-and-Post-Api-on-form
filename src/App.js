import './App.css';
import List from './components/List';
import NewTodo from './pages/NewTodo';
import TodoList from './pages/TodoList';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<TodoList/>} />
            <Route path='/new' element={<NewTodo/>} />
            <Route path='/newList' element={<List/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
