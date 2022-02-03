import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <Navbar />
      <Container />
      <Footer />
    </Router>
  );
}

export default App;
