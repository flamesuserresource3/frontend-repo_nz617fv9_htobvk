import { motion } from 'framer-motion'
import { BookOpen, Gamepad2, PawPrint, Rainbow } from 'lucide-react'

const buttons = [
  {
    label: 'Start Learning',
    color: 'from-yellow-300 to-amber-400',
    icon: BookOpen,
  },
  {
    label: 'Play Game',
    color: 'from-pink-300 to-rose-400',
    icon: Gamepad2,
  },
  {
    label: 'See Animals',
    color: 'from-sky-300 to-blue-400',
    icon: PawPrint,
  },
]

export default function LearningMenu({ onSeeAnimals }) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
        {buttons.map(({ label, color, icon: Icon }) => (
          <motion.button
            key={label}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => label === 'See Animals' && onSeeAnimals?.()}
            className={`flex items-center justify-between gap-4 rounded-2xl px-5 py-4 text-slate-800 bg-gradient-to-br ${color} shadow-lg`}
            style={{ fontFamily: '"Comic Neue", "Baloo", "Poppins Rounded", system-ui, ui-rounded' }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{label === 'Start Learning' ? '📚' : label === 'Play Game' ? '🎮' : '🦊'}</span>
              <div>
                <div className="font-extrabold text-lg">{label}</div>
                <div className="text-sm opacity-80">Tap to begin</div>
              </div>
            </div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70">
              <Icon className="h-5 w-5" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
