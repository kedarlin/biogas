import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/About';
import Wastes from './pages/Wastes';
import Home from './pages/Home';
import Data from './pages/Data';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/wastes' element={<Wastes />} />
          <Route path='/' element={<Home />}/>
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
