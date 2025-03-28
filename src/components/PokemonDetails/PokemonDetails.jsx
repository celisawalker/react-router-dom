import { useParams } from 'react-router';

const PokemonDetails = (props) => {
    const {pokemonId} = useParams();
    const singlePokemon = props.pokemon.find((poke) => (
        poke._id === parseInt(pokemonId)
    ));
    
    console.log(props);
    console.log(singlePokemon);
    return (
        <>
            <h2>Pokemon Details</h2>
            <dl>
                <dt>Weight:</dt>
                <dd>{singlePokemon.weight}</dd>
                <dt>Height:</dt>
                <dd>{singlePokemon.height}</dd>
            </dl>
        </>
    )
}

export default PokemonDetails