import { PokemonList } from '@/components/PokemonsList'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 ">
      <PokemonList />
    </main>
  )
}
