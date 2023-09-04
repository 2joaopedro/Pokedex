import Image from 'next/image'

interface CardProps {
  id: number
  name: string
  image: string
}

export function Card({ id, name, image }: CardProps) {
  return (
    <div className="bg-white shadow-xl rounded-2xl max-h-[300] max-w-[300] p-5 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 hover:shadow-2xl duration-100 ">
      <Image src={image} alt={name} width={200} height={200} />
      <div>
        <p className="text-slate-500 text-sm font-medium">#{id}</p>
        <p className="text-slate-700 font-bold text-lg">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      </div>
    </div>
  )
}
