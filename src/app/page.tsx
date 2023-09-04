import { Card } from '@/components/Card'
import { getPokemonList } from '@/services/PokemonsList'

export default async function Home() {
  const pokemons = await getPokemonList()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <ul className="grid grid-cols-4 gap-10 mt-24">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </ul>
    </main>
  )
}
