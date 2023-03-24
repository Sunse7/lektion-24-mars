function PokemonCard({pokemon, handleClick}) {
    return ( 
        <article className="card-container" onClick={() => handleClick(pokemon)}>
            <img width={150} height={150} src={pokemon.src} alt="" />
            <p>{pokemon.name}</p>
            <p className="card--cp">{pokemon.cp} CP</p>
        </article>
     );
}

export default PokemonCard;