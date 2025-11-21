import Hero from './components/Hero'
import Programs from './components/Programs'
import Schedule from './components/Schedule'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-600 to-orange-500" />
            <span className="font-semibold text-white">Red Dragon Dojo</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-slate-300">
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#schedule" className="hover:text-white">Schedule</a>
            <a href="#contact" className="hover:text-white">Free Trial</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="schedule">
          <Programs />
          <Schedule />
        </div>
        <Contact />
      </main>

      <footer className="border-t border-slate-800 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Red Dragon Dojo. All rights reserved.</p>
          <p className="text-slate-500 text-xs">Kickboxing • Karate • Kids Classes</p>
        </div>
      </footer>
    </div>
  )
}

export default App
