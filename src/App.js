import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBarra from './components/layout/NavBarra';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router>
      <NavBarra></NavBarra>
      <Routes>
        <Route exact path="/" element={<Home />} > </Route>
      </Routes>
      <Routes>
        <Route path="/empresa" element={<Empresa />} > </Route>
      </Routes>
      <Routes>
        <Route path="/contato" element={<Contato />} > </Route>
      </Routes>

      <Footer/>

    </Router>
  );
}

export default App;
