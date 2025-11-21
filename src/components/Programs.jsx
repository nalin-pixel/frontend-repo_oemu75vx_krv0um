import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

function Programs() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch(`${API}/api/programs`)
        const data = await res.json()
        setPrograms(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchPrograms()
  }, [])

  return (
    <section id="programs" className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-3xl font-bold text-white mb-6">Programs</motion.h2>
      <motion.p initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} className="text-slate-300 mb-8">Choose the path that fits your goals. All levels welcome.</motion.p>
      {loading ? (
        <p className="text-slate-400">Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{opacity:0, y:12}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.45, delay:i*0.05}}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition group"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white group-hover:translate-x-0.5 transition-transform">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded bg-red-600/20 text-red-300">{p.level}</span>
              </div>
              <p className="text-slate-300 text-sm">{p.description}</p>
              <div className="mt-4 text-slate-400 text-sm">Days: {p.days.join(', ')}</div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Programs
