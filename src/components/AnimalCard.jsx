import { motion } from 'framer-motion'

function playAnimalSound(name) {
  // Speak the animal name in a cheerful voice
  try {
    const utter = new SpeechSynthesisUtterance(name)
    utter.pitch = 1.2
    utter.rate = 1
    utter.lang = 'en-US'
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utter)
  } catch {}

  // Tiny pop with Web Audio for extra fun
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.type = 'sine'
    o.frequency.value = 880
    g.gain.value = 0.03
    o.connect(g)
    g.connect(ctx.destination)
    o.start()
    setTimeout(() => {
      o.stop()
      ctx.close()
    }, 120)
  } catch {}
}

export default function AnimalCard({ name, emoji, color = 'from-green-200 to-emerald-300' }) {
  return (
    <motion.button
      onClick={() => playAnimalSound(name)}
      whileHover={{ scale: 1.06, rotate: -1 }}
      whileTap={{ scale: 0.96 }}
      className={`group relative overflow-hidden rounded-3xl p-5 text-left shadow-lg bg-gradient-to-br ${color}`}
      aria-label={`${name} card`}
    >
      <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-white/40 blur-2xl pointer-events-none" />
      <div className="flex items-center gap-4">
        <div className="text-5xl sm:text-6xl drop-shadow-sm">{emoji}</div>
        <div>
          <div
            className="text-2xl sm:text-3xl font-extrabold text-slate-800"
            style={{ fontFamily: '"Comic Neue", "Baloo", "Poppins Rounded", system-ui, ui-rounded' }}
          >
            {name}
          </div>
          <div className="mt-1 text-slate-700/90">Tap to hear me!</div>
        </div>
      </div>
      <motion.div
        initial={{ y: 6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05 }}
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700"
      >
        <span>⭐</span>
        <span className="font-semibold">I say: "{name}!"</span>
      </motion.div>
    </motion.button>
  )
}
