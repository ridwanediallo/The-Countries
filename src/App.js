import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
