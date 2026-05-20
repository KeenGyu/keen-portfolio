import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Projects.module.css'

const projects = [
  {
    id: 'staycation',
    emoji: '🏡',
    title: 'Staycation Website',
    desc: 'A modern, premium staycation landing page with smooth animations and a cozy booking-style UI.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://keengyu.github.io/hannie-s-cozy-corner/',
    status: 'live',
  },
  {
    id: 'rentflow',
    emoji: '🏢',
    title: 'RentFlow',
    desc: 'A full-stack property management web app with role-based auth for admins and tenants, real-time Firestore, and a clean dashboard.',
    tags: ['React', 'Firebase', 'Vercel'],
    link: 'https://rental-app-silk-kappa.vercel.app/',
    status: 'live',
  },
]

function ProjectCard({ project, delay }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`${styles.card} reveal`}
      style={{ transitionDelay: `${delay}s` }}
      onClick={() => window.open(project.link, '_blank')}
    >
      <div className={styles.cardTop}>
        <span className={styles.emoji}>{project.emoji}</span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.tags}>
          {project.tags.map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.desc}</p>

        <div className={styles.cardFooter}>
          <a
            className={styles.cardLink}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            Live site →
          </a>
          <span className={styles.statusLive}>● live</span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const labelRef = useScrollReveal()
  const titleRef = useScrollReveal()

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <p ref={labelRef} className={`${styles.label} reveal`}>Projects</p>
        <h2 ref={titleRef} className={`${styles.title} reveal`}>What I've built</h2>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}
