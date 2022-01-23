import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const nome = "Myller";
  const url = 'https://via.placeholder.com.150';


  return (
    <div className="App">
      <h2>
        alterando JSX
      </h2>
      <p>
        Ola, {nome}
      </p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld></HelloWorld>

    </div>
  );
}

export default App;
