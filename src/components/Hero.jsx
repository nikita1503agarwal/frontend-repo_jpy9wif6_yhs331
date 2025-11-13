import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-white/40 bg-white/60 backdrop-blur text-xs text-gray-700">
            Playful • Minimal • Focused
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Own your day with a joyful tracker
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Budget, tasks, wishlists, routines, calendar, and favorites — all in one place. Designed mobile-first with a playful vibe and just the right amount of seriousness.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#get-started" className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800">Start Free</a>
            <a href="#features" className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-white/60 backdrop-blur">Explore Features</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white" />
    </section>
  )
}
