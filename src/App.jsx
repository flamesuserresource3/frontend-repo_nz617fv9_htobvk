import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LearningMenu from './components/LearningMenu'
import AnimalGallery from './components/AnimalGallery'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-sky-50 to-pink-50 text-slate-800">
      {/* Decorative background shapes */}
      <div className="pointer-events-none fixed inset-0">
        <motion.div
          className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-yellow-300/40 blur-3xl"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 -right-10 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <Navbar />

        <div className="mt-6">
          <Hero />
        </div>

        <div className="mt-6">
          <LearningMenu onSeeAnimals={() => {
            const el = document.getElementById('animals')
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }} />
        </div>

        <div id="animals" className="mt-8 mb-10">
          <AnimalGallery />
        </div>

        <footer className="py-8 text-center text-sm opacity-80">
          Made with colors, clouds, and lots of smiles.
        </footer>
      </div>
    </div>
  )
}
