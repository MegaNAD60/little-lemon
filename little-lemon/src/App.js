import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Book from './pages/Book';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/book" element={<Book />} />
    </Routes>

    </>
  );
}


export default App;
