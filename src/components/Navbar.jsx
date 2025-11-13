import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-inner" />
          <span className="font-semibold text-gray-900 tracking-tight">DayFlow</span>
        </div>
        <button className="p-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 active:scale-95 transition sm:hidden" aria-label="Menu">
          <Menu size={18} />
        </button>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a className="hover:text-gray-900" href="#features">Features</a>
          <a className="hover:text-gray-900" href="#rewards">Rewards</a>
          <a className="hover:text-gray-900" href="#faq">FAQ</a>
          <a className="px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800" href="#get-started">Get Started</a>
        </nav>
      </div>
    </header>
  )
}
