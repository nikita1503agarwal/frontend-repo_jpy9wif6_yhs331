import { Wallet, CheckSquare, Heart, Calendar, ListChecks, Sparkles, TicketPercent, Film } from 'lucide-react'
import FeatureCard from './FeatureCard'

export default function Features() {
  const items = [
    { Icon: Wallet, title: 'Budget Tracker', desc: 'Track spend, set limits, and visualize cash flow.', accent: 'bg-gradient-to-br from-blue-500 to-indigo-500' },
    { Icon: CheckSquare, title: 'To-dos', desc: 'Quick capture with priorities and reminders.', accent: 'bg-gradient-to-br from-emerald-500 to-teal-500' },
    { Icon: Heart, title: 'Wishlist', desc: 'Save items you want and plan purchases.', accent: 'bg-gradient-to-br from-pink-500 to-rose-500' },
    { Icon: ListChecks, title: 'Routine Tracker', desc: 'Build habits with streaks and gentle nudges.', accent: 'bg-gradient-to-br from-purple-500 to-fuchsia-500' },
    { Icon: Calendar, title: 'Calendar', desc: 'Daily, weekly, and monthly views that sync.', accent: 'bg-gradient-to-br from-amber-500 to-orange-500' },
    { Icon: Film, title: 'Favorites', desc: 'Recipes, movies, books — all bookmarked.', accent: 'bg-gradient-to-br from-cyan-500 to-sky-500' },
    { Icon: TicketPercent, title: 'Gamification', desc: 'Points, badges, and fun seasonal events.', accent: 'bg-gradient-to-br from-violet-500 to-purple-600' },
    { Icon: Sparkles, title: 'Minimal & Playful', desc: 'Clean UI with pops of color and micro-animations.', accent: 'bg-gradient-to-br from-slate-800 to-gray-900' },
  ]

  return (
    <section id="features" className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">All your day-to-day, in one place</h2>
        <p className="text-gray-600 mt-2">Built mobile-first so it feels like a natural extension of your phone.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <FeatureCard key={it.title} icon={it.Icon} title={it.title} desc={it.desc} accent={it.accent} />
          ))}
        </div>
      </div>
    </section>
  )
}
