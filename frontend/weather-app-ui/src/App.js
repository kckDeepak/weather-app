import './App.css';
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
