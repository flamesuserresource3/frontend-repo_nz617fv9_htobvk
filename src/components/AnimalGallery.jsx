import AnimalCard from './AnimalCard'

const animals = [
  { name: 'Lion', emoji: '🦁', color: 'from-yellow-200 to-amber-300' },
  { name: 'Panda', emoji: '🐼', color: 'from-slate-200 to-slate-300' },
  { name: 'Frog', emoji: '🐸', color: 'from-green-200 to-emerald-300' },
  { name: 'Penguin', emoji: '🐧', color: 'from-sky-200 to-blue-300' },
  { name: 'Fox', emoji: '🦊', color: 'from-orange-200 to-rose-300' },
  { name: 'Elephant', emoji: '🐘', color: 'from-indigo-200 to-violet-300' },
]

export default function AnimalGallery() {
  return (
    <section className="w-full">
      <h2
        className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4"
        style={{ fontFamily: '"Comic Neue", "Baloo", "Poppins Rounded", system-ui, ui-rounded' }}
      >
        Cute Animal Cards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {animals.map((a) => (
          <AnimalCard key={a.name} name={a.name} emoji={a.emoji} color={a.color} />
        ))}
      </div>
    </section>
  )
}
