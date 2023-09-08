type PokemonTypes = {
  id: number
  name: string
  url: string
}

export async function getPokemonList(): Promise<PokemonTypes[]> {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=1281&offset=0',
  )

  if (!response.ok) {
    throw new Error('Failed to load Pokémon')
  }

  const data = await response.json()

  const pokemonDetails = data.results.map(async (result: any) => {
    const response = await fetch(result.url)

    if (!response.ok) {
      throw new Error('Failed to load Pokémon')
    }

    const data = await response.json()

    return { id: data.id, name: data.name }
  })
  const pokemonList = await Promise.all(pokemonDetails)

  return pokemonList
}
