import Image from 'next/image'
interface CardProps {
  id: number
  name: string
  types: { id: number; name: string }[]
}

export function Card({ id, name, types }: CardProps) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

  const idString = id.toString()

  let formattedId = idString

  formattedId = formattedId.padStart(3, '0')

  const firstType = types[0]

  return (
    <button className="w-80 mh-48  cursor-pointer bg-white text-gray-700 shadow-lg rounded-2xl flex-col mt-auto mx-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 hover:shadow-2xl duration-200">
      <div className="flex justify-center aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-52">
        <Image src={imageUrl} alt="" width={100} height={100} />
      </div>
      <div className="flex items-end justify-between p-9">
        <div className="flex flex-col items-start ">
          <span className="font-normal ">#{formattedId}</span>
          <strong className="font-bold text-2xl">{name}</strong>
        </div>
        <div className="flex items-center">
          {firstType && (
            <Image
              src={`/types/${firstType.name}.svg`}
              alt={firstType.name}
              width={20}
              height={20}
            />
          )}
        </div>
      </div>
    </button>
  )
}
