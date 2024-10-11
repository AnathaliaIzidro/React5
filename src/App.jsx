import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [listaPersonagens, setListaPersonagens] = useState();
  const [personagemPesquisa, setPersonagemPesquisa] = useState("")

  async function carregarPagina() {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    setListaPersonagens(data.results);
  }

  useEffect(() => {
    carregarPagina();
  }, []);

  async function name(params) {
    
  }
  return (
    <>
      <h1>Projeto Rick and Morty</h1>

      <input type="text" 
      id="pesquisa"
      name="pesquisa"
      placeholder="Digite um personagem"
      className="pesquisa"
      onchange={(e)=> {setPersonagemPesquisa(e.target.value)}
      />

      <section className="container">
        {listaPersonagens &&
          listaPersonagens.map((element) => (
            <div className="card" key={element.id}>
              <img
                className="foto"
                src={element.image}
                alt="Foto do personagem"
              />
              <h2>Nome: {element.name}</h2>
              <p>Espécie: {element.species}</p>
              <p>Status: {element.status}</p>
              <p>Localização: {element.location.name}</p>
            </div>
          ))}
      </section>
    </>
  );
}

export default App;

