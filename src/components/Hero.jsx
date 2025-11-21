import React from 'react'
import { motion } from 'framer-motion'

function Hero({ gymName }) {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background: deep black with subtle vignette */}
      <div className="absolute inset-0 -z-20 bg-black" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />

      {/* Soft moving light sweeps */}
      <motion.div
        aria-hidden
        className="absolute -z-10 w-[120vmax] h-[120vmax] rounded-full opacity-[0.06] bg-white blur-3xl"
        initial={{ x: -200, y: -200 }}
        animate={{ x: [ -200, 160, -80 ], y: [ -200, 120, -120 ] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-10 items-center">
        {/* Centerpiece: gym emblem */}
        <div className="lg:col-span-12 flex items-center justify-center">
          <div className="relative w-full max-w-[720px] aspect-square">
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-white/15"
              style={{ boxShadow: '0 0 120px rgba(255,255,255,0.06) inset' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            {/* Dotted orbit */}
            <motion.div
              className="absolute inset-3 rounded-full border-2 border-dotted border-white/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
            {/* Core */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-10 rounded-full bg-gradient-to-b from-white/[0.08] to-black border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center px-8"
            >
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight"
              >
                {gymName}
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-3 text-sm sm:text-base text-white/70 max-w-[40ch]"
              >
                Kickboxing. Karate. Discipline and performance for every level.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-3"
              >
                <a href="#programs" className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors">Explore Programs</a>
                <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">Free Trial</a>
              </motion.div>
            </motion.div>

            {/* Orbiting labels */}
            <motion.div className="absolute left-1/2 -translate-x-1/2 -top-3" initial={{ y: -8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}>
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white text-xs tracking-wide">KICKBOXING</span>
            </motion.div>
            <motion.div className="absolute right-0 top-1/2 -translate-y-1/2" initial={{ x: 8, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.6 }}>
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white text-xs tracking-wide">KARATE</span>
            </motion.div>
            <motion.div className="absolute left-0 top-1/2 -translate-y-1/2" initial={{ x: -8, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.6 }}>
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white text-xs tracking-wide">KIDS</span>
            </motion.div>
            <motion.div className="absolute left-1/2 -translate-x-1/2 -bottom-3" initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.1, duration: 0.6 }}>
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white text-xs tracking-wide">SELF-DEFENSE</span>
            </motion.div>

            {/* Floating accents */}
            <motion.span
              className="absolute -right-6 top-8 h-24 w-24 rounded-full bg-white/5 blur-xl"
              animate={{ y: [0, -10, 0], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.span
              className="absolute -left-6 bottom-8 h-20 w-20 rounded-full bg-white/5 blur-xl"
              animate={{ y: [0, 8, 0], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
