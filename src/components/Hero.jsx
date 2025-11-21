import React from 'react'
import { motion } from 'framer-motion'

function Hero({ gymName }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-600/20 via-slate-900 to-black" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-600/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 items-center gap-12">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-300 text-sm mb-4"
          >Kickboxing • Karate • Kids</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            {gymName}: Transform discipline into power.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-slate-300 text-lg"
          >
            High-energy kickboxing, traditional karate, and kids classes designed for all levels. First class is free — come try it!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#programs" className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition">View Programs</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-slate-700 text-slate-200 hover:bg-slate-800 transition">Book Free Trial</a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl border border-slate-800 bg-[url('https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center shadow-2xl shadow-red-900/20" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-black/60 border border-slate-800 text-slate-200 text-sm backdrop-blur"
          >Real training. Real results.</motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
