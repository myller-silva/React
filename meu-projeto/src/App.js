import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Myller";
  const nome2 = "Maria";
  const url = 'https://via.placeholder.com.150';


  return (
    <div className="App">
      
      <SayMyName nome={nome} />
      <SayMyName nome={nome2} />
      <SayMyName nome="mac" />
      
      <Pessoa 
        nome="mac" 
        idade="22" 
        profissao="estudante" 
        foto="https://via.placeholder.com/150"
      />

    </div>
  );
}

export default App;
