import './App.css';
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Weather from './components/Weather';

function App() {
  return (
    // <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header/> <Weather/> </>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
