import { useState } from 'react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d1117]/80 backdrop-blur border-b border-[#30363d]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-[#58a6ff] font-bold text-xl font-mono">Surafel.</span>
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                 className="text-sm text-gray-400 hover:text-[#58a6ff] transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400">
          ☰
        </button>
      </div>
      {open && (
        <ul className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                 onClick={() => setOpen(false)}
                 className="text-sm text-gray-400 hover:text-[#58a6ff]">
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
