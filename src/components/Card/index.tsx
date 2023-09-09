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
  const firstName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <button className="w-80 mx-auto my-4  rounded-2xl bg-white shadow-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 hover:shadow-2xl duration-200">
      <div className="flex justify-center p-10">
        <Image src={imageUrl} alt="" width={100} height={100} />
      </div>
      <div className="flex items-end justify-between p-5">
        <div className="flex flex-col items-start px-6 py-4">
          <span className="text-gray-500 text-sm font-medium">
            #{formattedId}
          </span>
          <strong className="text-2xl font-bold text-gray-800">
            {firstName}
          </strong>
        </div>
        {firstType && (
          <div className="flex items-center px-6 py-4">
            <Image
              src={`/types/${firstType.name}.svg`}
              alt={firstType.name}
              width={24}
              height={24}
            />
          </div>
        )}
      </div>
    </button>
  )
}
