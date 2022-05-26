import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
