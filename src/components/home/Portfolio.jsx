import { Link } from 'react-router-dom'
import servicesImage from '../../assets/media/live-home/services-image.png'
import Reveal from '../common/Reveal'

function SolutionIcon({ name }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'web':
      return (<svg {...common}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18" /></svg>)
    case 'mobile':
      return (<svg {...common}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>)
    case 'fullstack':
      return (<svg {...common}><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" /></svg>)
    case 'consulting':
      return (<svg {...common}><path d="M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><path d="M14 3v6h6" /></svg>)
    case 'automation':
      return (<svg {...common}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.63 15a1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.63a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.37 9a1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z" /></svg>)
    case 'program':
      return (<svg {...common}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6M9 13h6M9 17h3" /></svg>)
    case 'webapp':
      return (<svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>)
    case 'ai':
      return (<svg {...common}><rect x="5" y="6" width="14" height="10" rx="2" /><path d="M9 10h.01M15 10h.01M9 16v2M15 16v2M12 2v4" /></svg>)
    case 'robot':
      return (<svg {...common}><rect x="4" y="9" width="16" height="11" rx="2" /><circle cx="9" cy="14" r="1" /><circle cx="15" cy="14" r="1" /><path d="M12 9V5M9 5h6" /></svg>)
    case 'data':
      return (<svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9Z" /></svg>)
    case 'cloud':
      return (<svg {...common}><path d="M7 18h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.5-1.5A4.5 4.5 0 0 0 7 18Z" /></svg>)
    case 'internship':
      return (<svg {...common}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>)
    case 'career':
      return (<svg {...common}><path d="M4 18V6a1 1 0 0 1 1-1h6l2 2h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" /></svg>)
    default:
      return null
  }
}

const solutions = [
  {
    icon: 'web', tag: 'Development', title: 'Web Development',
    text: 'From simple websites to complex web portals, we create modern, responsive, and secure web applications.',
    points: [
      'UI/UX Design + Framer/Frontend Development – Visually appealing and modern web interfaces',
      'Responsive & Mobile-First Layouts – Perfect performance across all devices',
      'Interactive Elements & Animations – Enhanced user engagement with modern effects',
      'Secure Backend Integration – Robust server-side architecture using Laravel, Node.js, etc',
    ],
  },
  {
    icon: 'mobile', tag: 'Android & iOS Development', title: 'Mobile App Development',
    text: 'We build high-performance, user-friendly mobile apps for Android, iOS, and cross-platform users.',
    points: [
      'Android & iOS Native Apps – Built with platform-specific performance and UI standards',
      'Cross-Platform Apps – One codebase, multiple platforms using Flutter/React Native',
      'User-Centric Interfaces – Intuitive UX with pixel-perfect UI design',
      'App Store Optimization & Support – For visibility, approval, and post-launch updates',
    ],
  },
  {
    icon: 'fullstack', tag: 'Development', title: 'Full Stack Development',
    text: "Whether you're building a simple website or a complex web application, our team provides scalable solutions tailored to your needs, ensuring your project is robust.",
    points: [
      'HTML + JavaScript + React Code + PHP + Laravel and more...',
      'Database and Back-End',
      'Interactive Elements & Animations – Enhanced user engagement with modern effects',
      'Secure Backend Integration – Robust server-side architecture using Laravel, Node.js, etc. Others – REST APIs, Git, Deployment Tools, etc.',
    ],
  },
  {
    icon: 'consulting', tag: 'Development', title: 'IT Consulting',
    text: 'We provide expert advice to businesses on technology strategies, software selection, and IT process optimization.',
    points: [
      'Technology Strategy & Roadmap – Aligning tech with business goals',
      'System & Software Recommendations – Best tools for your specific industry',
      'Infrastructure Planning – Cloud, on-premise, or hybrid solutions setup',
      'Process Optimization – Automating workflows and improving tech efficiency',
    ],
  },
  {
    icon: 'automation', tag: 'Development', title: 'Automation Solutions',
    text: 'We design smart automation workflows to enhance productivity and reduce manual errors in business operations.',
    points: [
      'Workflow Automation – From lead nurturing to employee onboarding',
      'Bot & Script Integration – To handle repetitive, rule-based tasks',
      'Third-Party API Connections – Seamless integration with CRMs, ERPs, and more',
      'Business Intelligence Dashboards – Visual analytics to track performance in real time',
    ],
  },
]

const programs = [
  {
    icon: 'program', tag: 'Training', title: 'Programming Courses',
    text: 'Comprehensive training in Python, Java, C++, JavaScript, and more with hands-on projects.',
    points: ['Beginner to advanced level curriculum', 'Hands-on coding assignments and projects', 'Live coding sessions & mentorship', 'Industry-recognized certifications'],
  },
  {
    icon: 'webapp', tag: 'Training', title: 'Web & App Development',
    text: 'Full-stack development courses covering React, Node.js, Flutter, and deployment practices.',
    points: ['Frontend: HTML, CSS, React, Vue.js', 'Backend: Node.js, PHP, Laravel etc', 'Mobile: Flutter & React Native', 'Hosting & deployment techniques (Vercel, Firebase, etc.)'],
  },
  {
    icon: 'ai', tag: 'Training', title: 'Artificial Intelligence & Machine Learning',
    text: 'Practical AI training including data processing, model development, and real-life applications.',
    points: ['Data preprocessing and visualization', 'Machine learning model building', 'Neural networks & deep learning', 'Real-time AI applications & projects'],
  },
  {
    icon: 'robot', tag: 'Training', title: 'Robotics & Embedded Systems',
    text: 'Hands-on robotics training with hardware and embedded software integrations.',
    points: ['Microcontroller programming (Arduino, Raspberry Pi)', 'Sensor integration and automation', 'Embedded C/C++ and real-time OS basics', 'Building and testing functional robots'],
  },
  {
    icon: 'data', tag: 'Training', title: 'Data Science & Analytics',
    text: 'Master big data, data visualization, and analytical tools to become a data-driven professional.',
    points: ['Master tools like Python, Power BI, and SQL', 'Build real-world data models and dashboards', 'Learn big data processing and predictive analytics', 'Become job-ready with project-based learning'],
  },
  {
    icon: 'cloud', tag: 'Training', title: 'Cloud Computing & DevOps',
    text: 'Learn cloud infrastructure, CI/CD pipelines, and DevOps tools for modern deployments.',
    points: ['Hands-on training in AWS, Azure, and GCP platforms', 'Work with CI/CD pipelines and container tools like Docker & Kubernetes', 'Automate deployments using real-time DevOps workflows', 'Learn version control, monitoring, and scalability techniques'],
  },
  {
    icon: 'internship', tag: 'Training', title: 'Internship Program',
    text: 'Gain real-world experience through live projects at our own IT facility with monthly stipends. Complete the internship and earn an experience certificate recognized by the industry.',
    points: ['Work on live projects within our in-house IT team', 'Receive monthly stipends during the internship', 'Gain mentorship and industry exposure', 'Get certified experience to boost your resume'],
  },
  {
    icon: 'career', tag: 'Training', title: 'Career Support',
    text: 'We provide end-to-end career guidance, including resume building, interview preparation sessions, and connections to top companies to help you land your dream job with the best salary packages.',
    points: ['1-on-1 resume building and LinkedIn optimization', 'Mock interviews with real-world scenarios', 'Direct referrals to hiring partners', 'Ongoing support until you land your ideal job'],
  },
]

function CaseCard({ c, ctaLabel, ctaTo, delay }) {
  return (
    <Reveal delay={String(delay)}>
      <article className='relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)] shadow-xl p-6 card-hover'>
        <div className='flex items-center justify-between'>
          <span className='w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-[#8fb3ff]'>
            <SolutionIcon name={c.icon} />
          </span>
          <span className='text-xs text-[#a6aec3] border border-white/10 rounded-full px-3 py-1'>{c.tag}</span>
        </div>
        <strong className='block mt-5 text-lg text-white'>{c.title}</strong>
        <p className='mt-3 text-[#a6aec3] leading-relaxed'>{c.text}</p>
        <ul className='mt-4 grid gap-2'>
          {c.points.map((p) => (
            <li key={p} className='flex items-start gap-2 text-[#a6aec3] text-sm'>
              <span className='mt-0.5 w-4 h-4 shrink-0 rounded-full bg-gradient-to-br from-[#0055ff] to-[#3a7cff] flex items-center justify-center'>
                <svg className='w-2.5 h-2.5 text-white' fill='none' stroke='currentColor' strokeWidth={3} viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                </svg>
              </span>
              {p}
            </li>
          ))}
        </ul>
        <Link to={ctaTo} className='inline-block mt-5 px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.03] duration-300'>
          {ctaLabel}
        </Link>
      </article>
    </Reveal>
  )
}

function Portfolio() {
  return (
    <section className='py-20 relative'>

      <div className='pointer-events-none absolute top-0 left-0 w-full h-48 overflow-hidden glow-pulse bg-[radial-gradient(ellipse_at_30%_0%,rgba(0,85,255,.10),transparent_50%)]' />

      <div className='max-w-7xl mx-auto px-5'>

        <Reveal className='max-w-2xl mx-auto text-center'>
          <p className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase'>
            Portfolio
          </p>
          <h2 className='mt-4 text-3xl md:text-4xl font-semibold leading-tight'>
            Showcasing Projects{' '}
            <span className='bg-gradient-to-b from-white via-[#e8efff] to-[#90b0ff] bg-clip-text text-transparent'>
              That Drive Digital Growth
            </span>
          </h2>
          <p className='mt-4 text-[#a6aec3] leading-relaxed'>
            From concept to code, our selected works reflect our commitment to innovation, performance, and user-focused design. Explore how we've helped businesses thrive in the digital world.
          </p>
          <Link to='/portfolio' className='inline-block mt-6 px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.03] duration-300'>
            View Portfolio
          </Link>
        </Reveal>

        <div className='mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start'>

          <div className='sticky top-28 self-start'>
            <Reveal type='reveal-left'>
              <article className='overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)] shadow-xl card-hover'>
                <img src={servicesImage} alt='Semicolon team' className='w-full h-full object-cover' />
              </article>
            </Reveal>
          </div>

          <div className='grid gap-6'>
            <Reveal type='reveal-right'>
              <article>
                <p className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase'>
                  Our Services
                </p>
                <h2 className='mt-4 text-2xl md:text-3xl font-semibold leading-tight'>
                  Innovate. Educate.{' '}
                  <span className='bg-gradient-to-b from-white via-[#e8efff] to-[#90b0ff] bg-clip-text text-transparent'>
                    Elevate.
                  </span>
                </h2>
                <p className='mt-3 text-[#a6aec3] leading-relaxed'>
                  We offer end-to-end digital solutions and professional IT education designed to drive growth and innovation. From cutting-edge software and app development to industry-relevant training programs and certifications, our services are built to elevate your business and career.
                </p>
                <p className='mt-6 font-semibold text-white'>IT Solutions</p>
              </article>
            </Reveal>

            {solutions.map((c, i) => (
              <CaseCard key={c.title} c={c} ctaLabel='Connect With Us' ctaTo='/contact' delay={Math.min((i + 1) * 100, 300)} />
            ))}

            <Reveal>
              <p className='font-semibold text-white'>Training Center</p>
            </Reveal>

            {programs.map((c, i) => (
              <CaseCard key={c.title} c={c} ctaLabel='Enroll Now' ctaTo='/enrollment' delay={Math.min((i + 1) * 100, 300)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
