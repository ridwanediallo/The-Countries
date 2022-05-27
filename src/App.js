import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import NavBar from './components/NavBar';
import Home from './components/Home';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
