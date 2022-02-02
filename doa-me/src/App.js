import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home' ;
import Pedidos from './components/pages/Pedidos';
import './index.css';
import AbrirPedido from './components/layout/AbrirPedido';

function App() {
  return (
    <Router>
    <Navbar />
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/pedidos' element={<Pedidos/>}/>
        </Routes>
        <AbrirPedido/>
      </div>
      {/*  */}
      <Footer/>
    </Router>
  );
}

export default App;
