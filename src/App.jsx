import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} DayFlow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-900" href="#">Privacy</a>
            <a className="hover:text-gray-900" href="#">Terms</a>
            <a className="hover:text-gray-900" href="/test">System Test</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
