import { getData } from '@/services/PokemonsList'

export default async function Home() {
  const pokemons = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </main>
  )
}
