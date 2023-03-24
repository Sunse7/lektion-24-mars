import { useState } from "react";
import "./App.css";
import PokemonList from "./Components/PokemonList";

function App() {
  const availablePokemonList = [{
    id: 1,
    name: 'Bulbasaur',
    cp: 439,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
},
{
    id: 37,
    name: 'Vulpix',
    cp: 194,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png'
},
{
    id: 134,
    name: 'Vaporeon',
    cp: 2469,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png'
},
{
    id: 130,
    name: 'Gyarados',
    cp: 2406,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png'
},
{
    id: 25,
    name: 'Pikachu',
    cp: 455,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
},
{
    id: 27,
    name: 'Sandshrew',
    cp: 710,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png'
},
{
    id: 52,
    name: 'Meowth',
    cp: 121,
    src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'
},
]

  const [availablePokemons, setAvailablePokemons] =
    useState(availablePokemonList);
  const [chosenPokemons, setChosenPokemons] = useState([]);

  function AddToChosenPokemons(pokemon) {
    console.log(pokemon);
    setChosenPokemons([...chosenPokemons, pokemon]);
    setAvailablePokemons(
      availablePokemons.filter((ap) => ap.id !== pokemon.id)
    )
  }

  function removeFromChosenPokemons(pokemon) {
    console.log(pokemon);
  }

  return (
    <>
      <header>
        <h1>Pokémons</h1>
      </header>
      <main>
        <h2>Choose your champion</h2>
        <section className="pokemons-lists-container">
          <PokemonList
            pokemons={availablePokemons}
            title="Available Pokémons"
            handleClick={AddToChosenPokemons}
          />
          <PokemonList
            pokemons={chosenPokemons}
            title="Chosen Pokémons"
            handleClick={removeFromChosenPokemons}
          />
        </section>
      </main>
    </>
  );
}

export default App;
