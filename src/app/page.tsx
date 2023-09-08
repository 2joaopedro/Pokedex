import { Card } from '@/components/Card'
import { getPokemonList } from '@/services/PokemonsList'

export default async function Home() {
  const pokemons = await getPokemonList()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 ">
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
    </main>
  )
}
