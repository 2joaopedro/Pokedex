import Image from 'next/image'

interface CardProps {
  id: number
  name: string
  image: string
}

export function Card({ id, name, image }: CardProps) {
  return (
    <div className="bg-gray-400 max-w-full">
      <div></div>
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <Image src={image} alt={name} width={200} height={200} />
      </div>
    </div>
  )
}
