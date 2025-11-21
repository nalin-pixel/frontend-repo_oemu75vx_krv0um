import React, { useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: '', error: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: '', error: '' })
    try {
      const res = await fetch(`${API}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ loading: false, success: data.message || 'Thanks! We will contact you soon.', error: '' })
      setForm({ name: '', email: '', phone: '', program: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: '', error: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
      <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-3xl font-bold text-white mb-6">Book a Free Trial</motion.h2>
      <motion.p initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} className="text-white/70 mb-8">Tell us a bit about yourself and which program you’re interested in. We’ll reach out to confirm a time.</motion.p>

      <motion.form onSubmit={handleSubmit} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}} className="grid md:grid-cols-2 gap-4 bg-white/[0.03] border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
        <div>
          <label className="block text-sm text-white/80 mb-1">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg bg-black border border-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40" />
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg bg-black border border-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40" />
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1">Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg bg-black border border-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40" />
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1">Program</label>
          <select name="program" value={form.program} onChange={handleChange} className="w-full rounded-lg bg-black border border-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40">
            <option value="">Select a program</option>
            <option>Kickboxing</option>
            <option>Karate</option>
            <option>Kids Martial Arts</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-white/80 mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="w-full rounded-lg bg-black border border-white/10 p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40" />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button disabled={status.loading} className="px-5 py-3 rounded-xl bg-white text-black font-semibold disabled:opacity-60 transition-transform active:scale-95">{status.loading ? 'Sending...' : 'Send Request'}</button>
          {status.success && <span className="text-green-400 text-sm">{status.success}</span>}
          {status.error && <span className="text-red-400 text-sm">{status.error}</span>}
        </div>
      </motion.form>
    </section>
  )
}

export default Contact
