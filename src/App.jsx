import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Download, Moon, Sun, Briefcase, GraduationCap, Award, Eye, ArrowUpRight, Cpu, ExternalLink, Menu, X } from 'lucide-react'
import Dock from './Chatbot'
import NetworkBG from './NetworkBG'
import { profile, stats, skills, experience, projects, achievements, education, schooling, accents, certificates, highlights } from './data/portfolio'

const icons = { briefcase: Briefcase, cpu: Cpu, award: Award }
const load = (k, d) => { try { return localStorage.getItem(k) ?? d } catch { return d } }
const save = (k, v) => { try { localStorage.setItem(k, v) } catch {} }

function Avatar() {
  const [ok, setOk] = useState(true)
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="order-1 mx-auto h-[220px] w-[220px] overflow-hidden lg:order-2 rounded-full bg-gradient-to-br from-accent/30 to-violet-600/30 shadow-[0_0_120px_rgb(var(--accent)/0.35)] sm:h-[400px] sm:w-[400px] lg:mx-0 lg:justify-self-end">
      {ok ? <img src="/profile.jpg" alt={profile.name} onError={() => setOk(false)} className="h-full w-full object-cover" /> : <div className="grad grid h-full w-full place-items-center text-8xl font-extrabold">NS</div>}
    </motion.div>
  )
}

function CertCard({ c, onOpen }) {
  const [err, setErr] = useState(false)
  return (
    <button onClick={() => !err && onOpen(c)} className="card group overflow-hidden text-left transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-800">
        {err ? <div className="p-3 text-center text-xs text-slate-500"><Award className="mx-auto mb-1 text-accent" />Add image:<br />public{c.image}</div>
          : <img src={c.image} alt={c.title} onError={() => setErr(true)} className="h-full w-full object-cover transition group-hover:scale-105" />}
      </div>
      <div className="p-4"><div className="text-sm font-semibold">{c.title}</div><div className="mt-1 text-xs text-slate-500">{c.issuer}{c.year && ` · ${c.year}`}</div></div>
    </button>
  )
}

const Section = ({ id, title, children }) => (
  <motion.section id={id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14">
    <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">{title}<span className="text-accent">.</span></h2>
    {children}
  </motion.section>
)

export default function App() {
  const [dark, setDark] = useState(load('theme', 'dark') === 'dark')
  const [accent, setAccent] = useState(load('accent-v2', 'Pink'))
  const [recruiter, setRecruiter] = useState(load('recruiter', 'off') === 'on')
  const [filter, setFilter] = useState('All')
  const [cert, setCert] = useState(null)
  const [menu, setMenu] = useState(false)

  useEffect(() => { document.documentElement.classList.toggle('dark', dark); save('theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => { document.documentElement.style.setProperty('--accent', accents[accent]); save('accent-v2', accent) }, [accent])
  useEffect(() => { save('recruiter', recruiter ? 'on' : 'off') }, [recruiter])

  const shown = recruiter ? projects.slice(0, 3) : projects.filter((p) => filter === 'All' || p.category === filter)
  const links = [['About', '#about'], ['Education', '#education'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Certificates', '#certifications'], ['Contact', '#contact']]

  return (
    <div className="relative overflow-hidden">
      <NetworkBG />

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#top" className="grad text-lg font-extrabold tracking-wide">NS</a>
          <ul className="hidden gap-6 text-sm font-medium text-slate-600 dark:text-slate-400 md:flex">
            {links.map(([l, h]) => <li key={l}><a href={h} className="transition hover:text-accent">{l}</a></li>)}
          </ul>
          <div className="flex items-center gap-2">
            <button onClick={() => setRecruiter(!recruiter)} className={`flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${recruiter ? 'border-accent bg-accent text-white' : 'border-slate-300 dark:border-slate-700'}`}><Eye size={14} /> <span className="hidden sm:inline">Recruiter</span></button>
            <button aria-label="Toggle light/dark mode" onClick={() => setDark(!dark)} className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 transition hover:border-accent hover:text-accent dark:border-slate-700">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white sm:flex">Resume <ExternalLink size={14} /></a>
            <button aria-label="Open menu" onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 dark:border-slate-700 md:hidden">{menu ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </nav>
        {menu && (
          <div className="border-t border-slate-200 bg-slate-50/95 px-6 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
            <ul className="space-y-1">
              {links.map(([l, h]) => <li key={l}><a href={h} onClick={() => setMenu(false)} className="block rounded-lg px-3 py-2.5 font-medium hover:bg-accent/10 hover:text-accent">{l}</a></li>)}
              <li><a href={profile.resume} target="_blank" rel="noreferrer" className="mt-2 block rounded-lg bg-accent px-3 py-2.5 text-center font-semibold text-white">Resume</a></li>
            </ul>
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-10 px-6 py-10 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <motion.div className="order-2 lg:order-1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="grad text-5xl font-extrabold leading-tight sm:text-7xl">{profile.name}</h1>
            <p className="mt-6 max-w-2xl text-xl text-slate-500 dark:text-slate-400 sm:text-2xl">{profile.headline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Python', 'Java', 'Flask', 'OpenCV', 'Laravel', 'MySQL'].map((t) => <span key={t} className="rounded-full border border-slate-200 bg-white/70 px-5 py-2 text-sm font-medium dark:border-slate-800 dark:bg-slate-900/70">{t}</span>)}
            </div>
            <div className="mt-8 flex gap-4">
              {[[profile.github, Github, 'GitHub'], [profile.linkedin, Linkedin, 'LinkedIn'], ['mailto:' + profile.email, Mail, 'Email']].filter(([h]) => h).map(([h, I, l]) => (
                <a key={l} href={h} target="_blank" rel="noreferrer" aria-label={l} className="grid h-14 w-14 place-items-center rounded-full border border-slate-300 bg-white/70 transition hover:-translate-y-1 hover:border-accent hover:text-accent dark:border-slate-800 dark:bg-slate-900/70"><I size={22} /></a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-lg bg-gradient-to-r from-accent to-violet-500 px-8 py-4 font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5">Let's Connect</a>
              <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-8 py-4 font-semibold transition hover:border-accent hover:text-accent dark:border-slate-700"><Download size={18} /> Download Resume</a>
            </div>
          </motion.div>
          <Avatar />
        </section>

        {!recruiter && (
          <Section id="about" title="About">
            <div className="card mx-auto max-w-3xl p-6 sm:p-8">
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                I'm a <b className="text-accent">backend developer</b> and <b className="text-accent">AI enthusiast</b> who enjoys turning ideas into working products with Python, Flask and OpenCV. I've completed 5 internships across AI/ML and full-stack development, and I'm now looking for an entry-level Software Engineer / Python Developer role.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Python', 'Flask', 'REST APIs', 'MySQL', 'OpenCV', 'Agentic AI'].map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[[experience.length + '', 'Internships'], [projects.length + '+', 'Projects'], ['8.9', 'CGPA']].map(([n, l]) => (
                  <div key={l} className="rounded-xl border border-slate-200 bg-slate-50 py-3 dark:border-slate-800 dark:bg-slate-950/50">
                    <div className="grad text-2xl font-extrabold">{n}</div>
                    <div className="text-xs text-slate-500">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        <Section id="education" title="Education">
          <div className="grid gap-4 md:grid-cols-3">
            {schooling.map((s) => (
              <div key={s.tag} className="card flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent"><GraduationCap size={20} /></div>
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">{s.tag}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{s.level}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.place}</p>
                {s.date && <p className="mt-1 text-xs text-slate-500">{s.date}</p>}
                <div className="mt-auto pt-5">
                  <div className="flex items-end justify-between">
                    <span className="text-xs text-slate-500">{s.label}</span>
                    <span className="grad text-3xl font-extrabold">{s.score}<span className="text-base">{s.out}</span></span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-accent to-violet-500" style={{ width: s.pct + '%' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([g, list]) => (
              <div key={g} className="card p-5"><h3 className="mb-3 text-sm font-semibold text-accent">{g}</h3><div className="flex flex-wrap gap-2">{list.map((s) => <span key={s} className="chip">{s}</span>)}</div></div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-4 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
            {(recruiter ? experience.slice(0, 3) : experience).map((e) => (
              <div key={e.role + e.date} className="card relative p-5">
                <span className="absolute -left-[33px] top-6 h-3 w-3 rounded-full bg-accent ring-4 ring-slate-50 dark:ring-slate-950" />
                <div className="flex flex-wrap items-center justify-between gap-1"><h3 className="flex items-center gap-2 font-semibold"><Briefcase size={16} className="text-accent" />{e.role}</h3><span className="text-xs text-slate-500">{e.date}</span></div>
                <div className="text-sm text-slate-500">{e.org}</div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          {!recruiter && (
            <div className="mb-6 flex gap-2">
              {['All', 'AI/ML', 'Full-Stack'].map((f) => (<button key={f} onClick={() => setFilter(f)} className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${filter === f ? 'border-accent bg-accent text-white' : 'border-slate-300 hover:border-accent dark:border-slate-700'}`}>{f}</button>))}
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            {shown.map((p) => (
              <motion.div layout key={p.title} whileHover={{ y: -4 }} className="card flex flex-col p-5 transition hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
                <div className="flex items-start justify-between gap-2"><h3 className="font-semibold">{p.title}</h3>{p.link && <a href={p.link} target="_blank" rel="noreferrer" aria-label="Open project"><ArrowUpRight size={18} className="text-accent" /></a>}</div>
                <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{certificates.map((c) => <CertCard key={c.title} c={c} onOpen={setCert} />)}</div>
        </Section>

        {!recruiter && (
          <Section id="achievements" title="Achievements">
            <ul className="grid gap-3 sm:grid-cols-2">{achievements.map((a) => (<li key={a} className="card flex items-start gap-3 p-4 text-sm"><Award size={18} className="mt-0.5 shrink-0 text-accent" />{a}</li>))}</ul>
          </Section>
        )}

        <Section id="contact" title="Let's connect">
          <div className="card grid gap-4 p-6 sm:grid-cols-2">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-accent"><Mail size={18} className="text-accent" />{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-accent"><Phone size={18} className="text-accent" />{profile.phone}</a>
            <span className="flex items-center gap-3"><MapPin size={18} className="text-accent" />{profile.location}</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent"><Linkedin size={18} className="text-accent" />LinkedIn</a>
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent"><Phone size={18} className="text-[#25D366]" />WhatsApp</a>
            {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent"><Github size={18} className="text-accent" />GitHub</a>}
          </div>
        </Section>
      </main>

      {cert && <div onClick={() => setCert(null)} className="fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-black/80 p-4"><img src={cert.image} alt={cert.title} className="max-h-full max-w-full rounded-xl" /></div>}
      <Dock />
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800">© {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind.</footer>
    </div>
  )
}
