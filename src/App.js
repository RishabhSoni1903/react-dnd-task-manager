import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddTaskForm from './pages/AddTaskForm';
import Home from './pages/Home';
import { DATA } from './data';


function App() {

  localStorage.setItem("categories", JSON.stringify(DATA));

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/addTask' element={<AddTaskForm />}></Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
