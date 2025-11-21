import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

function Schedule() {
  const [items, setItems] = useState([])
  const [day, setDay] = useState('')

  useEffect(() => {
    const load = async () => {
      const query = day ? `?day=${encodeURIComponent(day)}` : ''
      const res = await fetch(`${API}/api/schedule${query}`)
      const data = await res.json()
      setItems(data)
    }
    load()
  }, [day])

  const days = ['Mon','Tue','Wed','Thu','Fri','Sat']

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-6">
        <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-3xl font-bold text-white">Schedule</motion.h2>
        <div className="flex gap-2">
          <button onClick={() => setDay('')} className={`px-3 py-1 rounded-lg text-sm border ${day===''? 'bg-slate-800 text-white':'text-slate-300 border-slate-700 hover:bg-slate-800'}`}>All</button>
          {days.map(d => (
            <button key={d} onClick={() => setDay(d)} className={`px-3 py-1 rounded-lg text-sm border transition-colors ${day===d? 'bg-red-600 text-white border-red-500':'text-slate-300 border-slate-700 hover:bg-slate-800'}`}>{d}</button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((c, i) => (
          <motion.div key={c.id} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.03}} className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">{c.title}</div>
                <div className="text-slate-400 text-sm">{c.instructor} • {c.level}</div>
              </div>
              <div className="text-red-300 font-medium">{c.day} {c.time}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Schedule
