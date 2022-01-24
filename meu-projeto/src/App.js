import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

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
      <Frase></Frase>

    </div>
  );
}

export default App;
