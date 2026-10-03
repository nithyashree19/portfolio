// ✏️ Edit your content here — the whole site updates automatically.
export const profile = {
  name: 'Nithya Shree S',
  role: 'Backend Developer & AI/ML Developer',
  headline: 'Backend Developer & AI/ML Developer    •   B.Tech IT Graduate   •  Open to Software Roles',
  tagline: 'I build full-stack applications and computer-vision solutions that automate real-world workflows.',
  summary:
    'B.Tech Information Technology graduate (2026, CGPA 8.98/10) with five internships across AI/ML and full-stack development. Strong in Python, Java, OOP, REST APIs and MySQL — seeking an entry-level Software Engineer / Python Developer role.',
  location: 'Tuticorin, Tamil Nadu, India',
  email: 'shreenithya509@gmail.com',
  phone: '+91 74187 29447',
  whatsapp: '917418729447',
  linkedin: 'https://linkedin.com/in/nithya-shree-s-312264274',
  github: '', // ← paste your GitHub URL here, e.g. https://github.com/yourname
  resume: '/Nithya_Shree_S_Resume.pdf',
}

export const stats = [
  { label: 'Internships', value: '5' },
  { label: 'CGPA', value: '8.9' },
  { label: 'Projects', value: '6' },
]

export const skills = {
  Languages: ['Python', 'Java','Spring Boot', 'C', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  'AI / ML': ['Machine Learning', 'OpenCV', 'Computer Vision', 'Face Recognition', 'Agentic AI'],
  'Backend & Data': ['Flask', 'Laravel', 'REST APIs', 'MVC', 'MySQL', 'AJAX'],
  'Tools & Concepts': ['OOP', 'Data Structures', 'Git', 'IBM Cloud'],
}

export const experience = [
  {
    role: 'Software Developer Intern', org: 'Tigeen Computing Pvt. Ltd., Bangalore', date: 'Jun 2026 – Aug 2026',
    points: ['Built a full-stack Student Course Enrollment System with Laravel, PHP, MySQL, AJAX and REST APIs (MVC).', 'Implemented authentication, role-based access control and an admin dashboard.'],
  },
  {
    role: 'AI/ML Intern', org: 'Digisailor, Tuticorin', date: 'Feb 2026 – Mar 2026',
    points: ['Developed an Agentic AI solution in Python to automate Bar Bending Schedule (BBS) generation.', 'Implemented rule-based detailing logic to streamline engineering workflows.'],
  },
  {
    role: 'AI/ML Intern', org: 'Taras Systems and Solutions', date: 'Jul 2025 – Aug 2025',
    points: ['Trained machine learning models in Python on real-world datasets for predictive analysis.', 'Performed data preprocessing and model evaluation.'],
  },
  {
    role: 'AI/ML & Cloud Intern', org: 'IBM SkillsBuild (IBM, Edunet Foundation & AICTE)', date: 'Jun 2025 – Jul 2025',
    points: ['Completed an IBM Cloud mini-project covering AI, cloud computing and data analytics; earned joint certification.'],
  },
  {
    role: 'AI/ML Intern', org: 'Tessolve Semiconductor Pvt. Ltd., Bangalore', date: 'Jun 2024 – Dec 2024',
    points: ['Built a real-time Drowsiness Detection System with Python and OpenCV.', 'Built a Smart Attendance System using face recognition and Alexa voice integration.'],
  },
]

// category: 'AI/ML' | 'Full-Stack'
export const projects = [
  { title: 'Student Course Enrollment System', category: 'Full-Stack', tags: ['Laravel', 'PHP', 'MySQL', 'AJAX', 'REST APIs'], desc: 'Full-stack enrollment platform with role-based access, invoice generation and an admin dashboard, built on MVC.', link: '' },
  { title: 'AI-Based Rebar Detailing (BBS)', category: 'AI/ML', tags: ['Python', 'Agentic AI'], desc: 'Agentic AI solution that automates Bar Bending Schedule generation using rule-based detailing logic.', link: '' },
  { title: 'Smart Attendance System', category: 'AI/ML', tags: ['Python', 'Flask', 'OpenCV', 'Face Recognition'], desc: 'Identifies students from group photographs with face recognition; teacher/admin dashboards and timetable management.', link: '' },
  { title: 'AI Drowsiness Detection', category: 'AI/ML', tags: ['Python', 'OpenCV'], desc: 'Real-time eye-state analysis to detect driver drowsiness.', link: '' },
  { title: 'Phishing Website Detection', category: 'AI/ML', tags: ['Python', 'Machine Learning'], desc: 'Machine learning project to detect phishing websites. (Edit this description.)', link: '' },
  { title: 'SDQ Electronics Website & Admin Dashboard', category: 'Full-Stack', tags: ['Web', 'Admin Dashboard'], desc: 'Business website with an admin dashboard. (Edit this description.)', link: '' },
]

export const achievements = [
  'Gold Level Achiever — Accenture iAspire “Go for Gold” Contest, 2025',
  'Silver Medal — Programming in C, NPTEL (SWAYAM)',
  'Bronze Medal — Programming in Java, NPTEL (SWAYAM)',
  'Joint Certification — IBM SkillsBuild (IBM, Edunet Foundation & AICTE)',
]

export const education = {
  degree: 'B.Tech, Information Technology', school: 'Dr. Sivanthi Aditanar College of Engineering, Tiruchendur', date: '2022 – 2026', score: 'CGPA 8.98/10',
}

export const schooling = [
  { level: 'B.Tech, Information Technology', place: 'Dr. Sivanthi Aditanar College of Engineering, Tiruchendur', date: '2022 – 2026', label: 'CGPA', score: '8.9', out: '/10', pct: 89, tag: 'College' },
  { level: 'HSC (12th)', place: 'Subbiah Vidyalayam Girls Higher Secondary School, Thoothukudi', date: '', label: 'Percentage', score: '93', out: '%', pct: 93, tag: '12th' },
  { level: 'SSLC (10th)', place: 'Subbiah Vidyalayam Girls Higher Secondary School, Thoothukudi', date: '', label: 'Percentage', score: '83', out: '%', pct: 83, tag: '10th' },
]

export const accents = { Pink: '217 70 239', Cyan: '34 211 238', Violet: '139 92 246', Indigo: '99 102 241', Emerald: '16 185 129', Rose: '244 63 94', Amber: '245 158 11', Sky: '14 165 233' }

// 📸 Add your certificate images to public/certificates/ with these exact file names (JPG/PNG).
export const certificates = [
  { title: 'IBM SkillsBuild – AI/ML & Cloud', issuer: 'IBM · Edunet Foundation · AICTE', year: '2025', image: '/certificates/ibm-skillsbuild.jpg' },
  { title: 'Gold Level Achiever – Go for Gold', issuer: 'Accenture iAspire', year: '2025', image: '/certificates/accenture-iaspire.jpg' },
  { title: 'Programming in C – Silver Medal', issuer: 'NPTEL (SWAYAM)', year: '', image: '/certificates/nptel-c.jpg' },
  { title: 'Programming in Java – Bronze Medal', issuer: 'NPTEL (SWAYAM)', year: '', image: '/certificates/nptel-java.jpg' },
]

export const highlights = [
  { icon: 'briefcase', title: 'Real-world experience', text: '5 internships across AI/ML and full-stack development — I ship working projects, not just coursework.' },
  { icon: 'cpu', title: 'Python + AI/ML', text: 'Computer vision, face recognition and agentic AI solutions built with Python, OpenCV and Flask.' },
  { icon: 'award', title: 'Proven performer', text: '8.9 CGPA, Accenture iAspire Gold Level achiever, and NPTEL medallist in C and Java.' },
]

// ✏️ The HR chatbot reads these answers. Edit them to match what you want to say.
export const faq = {
  whyHire: 'Nithya combines solid Python/Java fundamentals with hands-on delivery: 5 internships, 6 projects (AI/ML and full-stack), an 8.9 CGPA, and awards from Accenture iAspire and NPTEL. She learns fast and builds working, automated solutions.',
  availability: 'Nithya is open to full-time entry-level roles. Please contact her for the exact joining date.',
  salary: 'Nithya is open to discussing compensation based on the role and company standards. Please contact her directly.',
  location: 'Nithya is based in Tuticorin, Tamil Nadu, and has worked in Bengaluru during her internships. She is open to Bengaluru and remote opportunities.',
}
