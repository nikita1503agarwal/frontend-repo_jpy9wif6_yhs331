export default function FeatureCard({ icon: Icon, title, desc, accent }) {
  return (
    <div className="rounded-2xl p-4 border border-gray-200 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition">
      <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-white ${accent} shadow-inner`}> 
        {Icon && <Icon size={18} />}
      </div>
      <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  )
}
