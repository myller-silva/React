import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home' ;
import Pedidos from './components/pages/Pedidos';

import styles from './Container.module.css';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/pedidos' element={<Pedidos/>}/>
        </Routes>
      </div>
      <Footer/>

    </Router>
  );
}

export default App;
