type Pokemon = {
  id: number
  name: string
  url: string
  image: string
}

export async function getPokemonList(): Promise<Pokemon[]> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')

  if (!res.ok) {
    throw new Error('Failed to load Pokémon')
  }

  const data = await res.json()

  const pokemonDetailsPromises = data.results.map(async (result: any) => {
    const detailsResponse = await fetch(result.url) // Use the result.url to fetch details
    if (!detailsResponse.ok) {
      throw new Error(`Failed to load details for Pokémon ${result.name}`)
    }
    const detailsData = await detailsResponse.json()

    return {
      id: detailsData.id,
      name: detailsData.name,
      image: detailsData.sprites.other['official-artwork'].front_default,
    }
  })

  const pokemonList = await Promise.all(pokemonDetailsPromises)

  return pokemonList
}
