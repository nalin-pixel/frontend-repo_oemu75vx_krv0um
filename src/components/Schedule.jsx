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
          <button onClick={() => setDay('')} className={`px-3 py-1 rounded-lg text-sm border ${day===''? 'bg-white/10 text-white border-white/15':'text-white/70 border-white/15 hover:bg-white/10'}`}>All</button>
          {days.map(d => (
            <button key={d} onClick={() => setDay(d)} className={`px-3 py-1 rounded-lg text-sm border transition-colors ${day===d? 'bg-white text-black border-white':'text-white/70 border-white/15 hover:bg-white/10'}`}>{d}</button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((c, i) => (
          <motion.div key={c.id} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.03}} className="p-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">{c.title}</div>
                <div className="text-white/60 text-sm">{c.instructor} • {c.level}</div>
              </div>
              <div className="text-white font-medium">{c.day} {c.time}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Schedule
