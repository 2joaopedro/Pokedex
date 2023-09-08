import Image from 'next/image'

interface CardProps {
  id: number
  name: string
}

export function Card({ id, name }: CardProps) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

  const idString = id.toString()

  let formattedId = idString

  if (idString.length < 2) {
    formattedId = `00${idString}`
  } else if (idString.length < 3) {
    formattedId = `0${idString}`
  }

  return (
    <div className="w-72 mh-48 max-h-full bg-white text-gray-700 shadow-lg rounded-2xl flex-col mt-auto mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 hover:shadow-2xl duration-200">
      <div className="flex justify-center aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-52">
        <Image src={imageUrl} alt="" width={100} height={100} />
      </div>
      <div className="flex-col gap-2 mt-4 m-5">
        <span className="font-normal ">#{formattedId}</span>
        <h1 className="font-bold text-2xl">{name}</h1>
      </div>
    </div>
  )
}
