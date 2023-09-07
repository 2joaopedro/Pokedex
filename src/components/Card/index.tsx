import Image from 'next/image'

interface CardProps {
  id: number
  name: string
}

export function Card({ id, name }: CardProps) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  return (
    <div className="flex flex-col bg-white shadow-xl rounded-2xl  p-5 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 hover:shadow-2xl duration-200 ">
      <div className="flex items-center justify-center">
        <Image src={imageUrl} alt={name} width={150} height={150} />
      </div>

      <span className="text-slate-500 text-sm font-medium">#{id}</span>
      <div className="flex justify-between">
        <p className="text-slate-700 font-bold text-lg">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      </div>
    </div>
  )
}
