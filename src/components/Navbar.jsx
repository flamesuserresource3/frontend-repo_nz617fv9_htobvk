import { Star, Rocket, PawPrint, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const links = [
    { label: 'Home', icon: Star, color: 'from-yellow-400 to-orange-400' },
    { label: 'Learn', icon: BookOpen, color: 'from-sky-400 to-blue-400' },
    { label: 'Animals', icon: PawPrint, color: 'from-pink-400 to-rose-400' },
    { label: 'Space', icon: Rocket, color: 'from-green-400 to-emerald-400' },
  ]

  return (
    <div className="w-full flex items-center justify-center pt-4">
      <nav className="backdrop-blur-md bg-white/60 shadow-sm rounded-full px-4 py-2">
        <ul className="flex items-center gap-2 sm:gap-3">
          {links.map(({ label, icon: Icon, color }) => (
            <motion.li
              key={label}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="list-none"
            >
              <button
                className={`flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 text-sm font-semibold text-slate-800 bg-gradient-to-br ${color} shadow-md hover:shadow-lg transition-all`}
                aria-label={label}
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/70">
                  <Icon className="h-4 w-4 text-slate-700" />
                </span>
                <span className="hidden xs:inline">{label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
