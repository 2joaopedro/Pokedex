import Image from 'next/image'

interface CardProps {
  id: number
  name: string
  image: string
  types: string[]
}

export function Card({ id, name, image, types }: CardProps) {
  return (
    <div className="flex flex-col bg-white shadow-xl rounded-2xl  p-5 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 hover:shadow-2xl duration-100 ">
      <div className="flex items-center justify-center">
        <Image src={image} alt={name} width={200} height={200} />
      </div>

      <span className="text-slate-500 text-sm font-medium">#{id}</span>
      <div className="flex justify-between">
        <p className="text-slate-700 font-bold text-lg">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
        <div className="flex gap-2">
          {types.map((type, index) => (
            <span key={index} className="text-slate-600 text-base font-medium">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
