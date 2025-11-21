import Hero from './components/Hero'
import Programs from './components/Programs'
import Schedule from './components/Schedule'
import Contact from './components/Contact'

function App() {
  const gymName = 'Academia De Educatie Si Sport Ion Andrei'
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/80 shadow-[0_0_32px_rgba(255,255,255,0.45)] animate-pulse" />
            <span className="font-semibold text-white truncate max-w-[18ch] sm:max-w-none" title={gymName}>{gymName}</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-white/70">
            <a href="#programs" className="hover:text-white transition-colors">Programs</a>
            <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
            <a href="#contact" className="hover:text-white transition-colors">Free Trial</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero gymName={gymName} />
        <div id="schedule">
          <Programs />
          <Schedule />
        </div>
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} {gymName}. All rights reserved.</p>
          <p className="text-white/50 text-xs">Kickboxing • Karate • Kids Classes</p>
        </div>
      </footer>
    </div>
  )
}

export default App
