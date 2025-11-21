import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-600/20 via-slate-900 to-black" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 items-center gap-12">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-300 text-sm mb-4">Kickboxing • Karate • Kids</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Train hard. Get confident. Join our martial arts community.
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            High-energy kickboxing, traditional karate, and kids classes designed for all levels. First class is free — come try it!
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#programs" className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition">View Programs</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-slate-700 text-slate-200 hover:bg-slate-800 transition">Book Free Trial</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl border border-slate-800 bg-[url('https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center shadow-2xl shadow-red-900/20" />
        </div>
      </div>
    </section>
  )
}

export default Hero
