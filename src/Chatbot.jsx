import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import { profile, schooling, skills, experience, projects, education, certificates, faq } from './data/portfolio'

const join = (a) => a.join(', ')
const KB = [
  { k: ['hire', 'why', 'strength', 'strengths', 'fit', 'standout', 'best'], a: () => faq.whyHire },
  { k: ['skill', 'skills', 'tech', 'stack', 'technology', 'technologies', 'language', 'languages', 'python', 'java', 'know'],
    a: () => `Languages: ${join(skills.Languages)}. AI/ML: ${join(skills['AI / ML'])}. Backend & data: ${join(skills['Backend & Data'])}. Tools: ${join(skills['Tools & Concepts'])}.` },
  { k: ['project', 'projects', 'built', 'portfolio', 'work'], a: () => `Nithya has built ${projects.length} projects. Highlights: ` + projects.slice(0, 4).map((p) => `${p.title} (${p.desc})`).join(' • ') },
  { k: ['experience', 'internship', 'internships', 'intern', 'company', 'companies', 'worked'], a: () => experience.map((e) => `${e.role} at ${e.org} (${e.date})`).join(' • ') },
  { k: ['education', '12th', '10th', 'hsc', 'sslc', 'school', 'degree', 'college', 'cgpa', 'marks', 'btech', 'graduate', 'study'], a: () => `${education.degree} — ${education.school} (${education.date}), ${education.score}. School: HSC (12th) 93% and SSLC (10th) 83% from Subbiah Vidyalayam Girls Higher Secondary School, Thoothukudi.` },
  { k: ['certificate', 'certificates', 'certification', 'certifications', 'award', 'awards', 'medal', 'achievement', 'nptel', 'ibm', 'accenture'], a: () => 'Certifications & awards: ' + certificates.map((c) => c.title).join(' • ') },
  { k: ['available', 'availability', 'join', 'joining', 'notice', 'start', 'hiring', 'opening'], a: () => faq.availability },
  { k: ['salary', 'ctc', 'package', 'expectation', 'expected', 'pay', 'compensation'], a: () => faq.salary },
  { k: ['location', 'relocate', 'relocation', 'remote', 'bangalore', 'bengaluru', 'based', 'city'], a: () => faq.location },
  { k: ['contact', 'email', 'phone', 'call', 'reach', 'linkedin', 'whatsapp', 'number'], a: () => `Email: ${profile.email} • Phone/WhatsApp: ${profile.phone} • LinkedIn: ${profile.linkedin}` },
  { k: ['resume', 'cv', 'download'], a: () => 'You can download the resume using the "Download Resume" button at the top of this page.' },
  { k: ['yourself', 'intro', 'nithya', 'about'], a: () => `${profile.name} is a backend developer and AI enthusiast — B.Tech IT graduate with 5 internships in AI/ML and full-stack development, skilled in Python, Flask, OpenCV and MySQL.` },
  { k: ['backend', 'api', 'apis', 'flask', 'mysql', 'database', 'rest'], a: () => 'Backend: Python, Flask, Laravel, REST APIs and MySQL. She builds clean APIs and data-driven apps.' },
  { k: ['ai', 'ml', 'machine', 'learning', 'opencv', 'vision', 'agentic'], a: () => 'AI/ML: computer vision, face recognition and agentic AI solutions using Python and OpenCV.' },
  { k: ['thanks', 'thank', 'thankyou', 'tq'], a: () => "You're welcome! 😊 Feel free to ask anything else about Nithya." },
  { k: ['bye', 'goodbye', 'later'], a: () => 'Bye! 👋 Thanks for visiting Nithya\'s portfolio. Have a great day!' },
  { k: ['help', 'options', 'menu', 'commands'], a: () => 'You can ask me about: skills, projects, experience, education, certificates, availability, location, salary or contact details.' },
  { k: ['hi', 'hello', 'hey', 'namaste'], a: () => `Hello! I can tell you about ${profile.name}'s skills, projects, experience and availability. What would you like to know?` },
]
const chips = ['About Nithya', 'Backend skills?', 'AI/ML work?', 'Why hire her?', 'Her projects', 'Availability', 'Contact']

const GREET = /^\s*(h+i+|he+l+o+|he+y+|hai+|hii+|namaste|vanakkam|good\s*(morning|afternoon|evening)|yo|sup)\b[\s!.,?]*$/i
const HOWR = /how\s*(are|r)\s*(you|u)|how'?s it going|what'?s up/i
const WHO = /(who are you|your name|what are you|who r u|introduce)/i

function reply(text) {
  if (GREET.test(text)) return `Hi! 👋 I'm Nithya AI Assistant. I can tell you about her skills, projects, experience and availability. What would you like to know?`
  if (HOWR.test(text)) return "I'm doing great, thanks for asking! 😊 How can I help you today?"
  if (WHO.test(text)) return `I'm Nithya AI Assistant — here to answer questions about ${profile.name}'s skills, projects, experience and availability.`
  const t = text.toLowerCase()
  const words = t.match(/[a-z0-9+#]+/g) || []
  let best = null, score = 0
  for (const item of KB) {
    const s = item.k.filter((k) => words.includes(k) || (k.length > 5 && t.includes(k))).length
    if (s > score) { best = item; score = s }
  }
  return best ? best.a() : `I'm not sure about that one. Try asking about skills, projects, experience, education, certifications or availability — or contact Nithya directly at ${profile.email}.`
}

export default function Dock() {
  const [open, setOpen] = useState(false)
  const [bubble, setBubble] = useState(false)
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState([{ from: 'bot', text: `Hi! I'm ${profile.name.split(' ')[0]} AI Assistant. Ask me anything an HR or hiring manager would want to know.` }])
  const end = useRef(null)

  useEffect(() => {
    let seen = false
    try { seen = sessionStorage.getItem('welcomed') === '1' } catch {}
    if (seen) return
    const t = setTimeout(() => setBubble(true), 2000)
    const h = setTimeout(() => setBubble(false), 12000)
    return () => { clearTimeout(t); clearTimeout(h) }
  }, [])
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs, typing, open])

  const dismiss = () => { setBubble(false); try { sessionStorage.setItem('welcomed', '1') } catch {} }
  const send = (q) => {
    const text = (q ?? input).trim()
    if (!text || typing) return
    setInput('')
    setMsgs((m) => [...m, { from: 'user', text }])
    setTyping(true)
    setTimeout(() => { setMsgs((m) => [...m, { from: 'bot', text: reply(text) }]); setTyping(false) }, 600)
  }
  const wa = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Nithya, I saw your portfolio and would like to connect.")}`

  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col items-end gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
      <AnimatePresence>
        {bubble && !open && (
          <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} onClick={() => { dismiss(); setOpen(true) }} className="card max-w-[11rem] bg-white px-3 py-2 text-left text-xs shadow-xl dark:bg-slate-900">
            <b>Hi!</b> I'm Nithya AI Assistant 👋
          </motion.button>
        )}
        {open && (
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} className="flex h-[24rem] max-h-[65vh] w-[18rem] max-w-[calc(100vw-1.5rem)] sm:h-[30rem] sm:w-[22rem] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between bg-accent px-4 py-3 text-white">
              <div className="flex items-center gap-2"><Bot size={20} /><div><div className="text-sm font-semibold">Nithya AI Assistant</div><div className="text-[11px] opacity-80">Instant answers for recruiters</div></div></div>
              <button aria-label="Close chat" onClick={() => setOpen(false)}><X size={18} /></button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-3 text-sm">
              {msgs.map((m, i) => (
                <div key={i} className={m.from === 'user' ? 'flex justify-end' : 'flex'}>
                  <div className={`max-w-[85%] rounded-2xl px-3 py-2 ${m.from === 'user' ? 'bg-accent text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>{m.text}</div>
                </div>
              ))}
              {typing && <div className="w-fit rounded-2xl bg-slate-100 px-3 py-2 text-slate-500 dark:bg-slate-800">typing…</div>}
              {msgs.length < 3 && <div className="flex flex-wrap gap-2 pt-1">{chips.map((c) => <button key={c} onClick={() => send(c)} className="chip transition hover:border-accent hover:text-accent">{c}</button>)}</div>}
              <div ref={end} />
            </div>
            <form onSubmit={(e) => { e.preventDefault(); send() }} className="flex gap-2 border-t border-slate-200 p-3 dark:border-slate-700">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your question…" className="flex-1 rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent dark:border-slate-700" />
              <button aria-label="Send" className="rounded-xl bg-accent px-3 text-white"><Send size={16} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center gap-3">
        <a href={wa} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full sm:h-14 sm:w-14 bg-[#25D366] text-white shadow-xl transition hover:scale-105"><MessageCircle size={22} /></a>
        <button aria-label="Open assistant" onClick={() => { dismiss(); setOpen(!open) }} className="flex h-11 w-11 items-center justify-center rounded-full sm:h-14 sm:w-14 bg-accent text-white shadow-xl shadow-accent/40 transition hover:scale-105"><Bot size={22} /></button>
      </div>
    </div>
  )
}
