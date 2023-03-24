import PokemonCard from "./PokemonCard";

function PokemonList({ pokemons, title, handleClick }) {

    function calcCP() {
        let total = 0;
        pokemons.forEach(p => {
            total += p.cp;
        });
        return total
    }

  return (
    <section className="pokemons-list-container">
      <h3>{title}</h3>

      {pokemons.map((pokemon, i) => (
        <PokemonCard key={i} pokemon={pokemon} handleClick={handleClick} />
      ))}
      <p className="total-cp">Total CP: {calcCP()}</p>
    </section>
  );
}

export default PokemonList;
