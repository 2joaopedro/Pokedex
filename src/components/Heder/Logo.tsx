import * as React from 'react'

export function Logo() {
  return (
    <svg viewBox="0 0 100 100" className="w-24">
      <path
        d="M30 50a1 1 1 0140 0H57.5a1 1 1 00-15 0z"
        fill="red"
        stroke="#222"
      />
      <circle cx={50} cy={50} r={5} fill="#222" stroke="#222" />
      <path
        d="M30 50a1 1 1 0040 0H57.5a1 1 1 01-15 0z"
        fill="#fff"
        stroke="#222"
      />
    </svg>
  )
}
