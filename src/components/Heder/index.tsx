import Link from 'next/link'
import { Logo } from './Logo'

export function Header() {
  return (
    <header>
      <nav className=" px-4 lg:px-6 py-2.5 bg-gray-900">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center">
            <Logo />
            <span className="text-xl font-semibold text-slate-100">
              Pokedex
            </span>
          </Link>
          <div className="flex gap-5">
            <span className="text-base font-normal text-slate-100">
              Code project:
            </span>
            <Link
              href="https://github.com/2joaopedro/pokedex"
              className="text-base font-normal text-slate-100"
            >
              GitHub
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
