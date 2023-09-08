import { getPokemonList } from '@/services/PokemonsList'
import { Card } from '../Card'

interface PokemonList {
  numColumns: []
}

export async function PokemonList() {
  const pokemons = await getPokemonList()

  return (
    <ul className="my-28 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-5">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
        />
      ))}
    </ul>
  )
}
