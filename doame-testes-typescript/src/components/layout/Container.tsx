import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Pedidos from '../pages/Pedidos';
// import Doar from '../pages/Doar';
import AbrirPedido from '../layout/AbrirPedido';
import './Container.css';
import { Settings } from '../pages/Settings';

function Container() {
    return(
      <div id="container">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pedidos' element={<Pedidos/>}/>
            <Route path='/configurar' element={<Settings/>}/>
            {/* <Route path='/doar' element={<Doar/>}/> */}
            {/* <Route path='/atualizarpedido' element={<Atualizar/>}/> */}
        </Routes>
        <AbrirPedido/>
        </div>
    )
}
export default Container;
