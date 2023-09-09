import { getPokemonList } from '@/services/PokemonsList'
import { Card } from '../Card'

export async function PokemonList() {
  const pokemons = await getPokemonList()
  return (
    <ul className="my-28 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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
