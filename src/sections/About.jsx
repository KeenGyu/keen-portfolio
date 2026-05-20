import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'

const skills = [
  { name: 'React',       pct: 88 },
  { name: 'Firebase',    pct: 82 },
  { name: 'Tailwind CSS',pct: 90 },
  { name: 'JavaScript',  pct: 85 },
  { name: 'Node.js',     pct: 70 },
]

export default function About() {
  const labelRef  = useScrollReveal()
  const titleRef  = useScrollReveal()
  const textRef   = useScrollReveal()
  const skillsRef = useScrollReveal()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <p ref={labelRef} className={`${styles.label} reveal`}>About</p>
        <h2 ref={titleRef} className={`${styles.title} reveal`}>A bit about me</h2>

        <div className={styles.grid}>
          <div ref={textRef} className={`${styles.text} reveal`}>
            <p>
              I'm a web developer focused on building modern UI/UX experiences
              that are fast, clean, and user-friendly. I love turning ideas into
              polished digital products.
            </p>
            <p>
              From landing pages to full-stack web apps, I care about every
              detail — from smooth animations to solid architecture.
            </p>
          </div>

          <div ref={skillsRef} className={`${styles.skills} reveal`}>
            {skills.map(s => (
              <div key={s.name} className={styles.skillRow}>
                <span className={styles.skillName}>{s.name}</span>
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: `${s.pct}%` }} />
                </div>
                <span className={styles.skillPct}>{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
