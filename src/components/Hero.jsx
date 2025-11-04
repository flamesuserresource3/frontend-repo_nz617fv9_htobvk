import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[420px] sm:h-[520px] rounded-3xl border border-white/40 shadow-xl bg-gradient-to-br from-yellow-200 via-sky-200 to-pink-200">
        <Spline
          scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-white/40" />

        {/* Floating clouds */}
        <motion.div
          className="absolute top-6 -left-10 text-sky-500/70"
          initial={{ x: -50 }}
          animate={{ x: [ -50, 40, -50 ] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-6xl">☁️</span>
        </motion.div>
        <motion.div
          className="absolute bottom-10 -right-8 text-sky-500/70"
          initial={{ x: 40 }}
          animate={{ x: [ 40, -40, 40 ] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-7xl">☁️</span>
        </motion.div>

        {/* Twinkling stars */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-yellow-400"
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2 + (i % 5), repeat: Infinity }}
              style={{
                top: `${Math.random() * 80 + 5}%`,
                left: `${Math.random() * 80 + 5}%`,
                fontSize: `${Math.random() * 18 + 10}px`,
              }}
            >
              ✨
            </motion.span>
          ))}
        </div>

        {/* Headline */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-3xl sm:text-5xl text-slate-800"
            style={{ fontFamily: '"Comic Neue", "Baloo", "Poppins Rounded", system-ui, ui-rounded' }}
          >
            Let’s Learn and Play!
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-3 text-slate-700 max-w-xl"
          >
            Colors, numbers, animals and more — all in a bright, happy place for curious minds.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
