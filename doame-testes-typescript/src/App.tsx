import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home' ;
import Pedidos from './components/pages/Pedidos';
import AbrirPedido from './components/layout/AbrirPedido';
import Doar from './components/pages/Doar';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      {/*  */}
      <div id="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pedidos' element={<Pedidos/>}/>
          <Route path='/doar' element={<Doar/>}/>
          {/* <Route path='/atualizarpedido' element={<Atualizar/>}/> */}
        </Routes>
        <AbrirPedido/>
      </div>
      {/*  */}
      <Footer/>
    </Router>
  );
}

export default App;
