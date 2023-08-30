type Pokemon = {
  id: number
  name: string
}

export async function getData(): Promise<Pokemon[]> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')

  if (!res.ok) {
    throw new Error('Falha ao carregar Pokemons')
  }

  const data = await res.json()
  return data.results
}
