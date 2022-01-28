import './App.css';
import OutraLista from './components/OutraLista';

function App() {
  const meusItens = ["React", "Vue", "Angular"];

  return (
    <div className="App">
      <h1>Renderizacao de listas</h1>
      <OutraLista itens={meusItens}/>
      {/* lista vazia: */}
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
