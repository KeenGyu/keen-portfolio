import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={styles.grid}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            available for work
          </div>

          <h1 className={styles.heading}>
            Building things<br />
            for the <span className={styles.gradient}>web</span>
          </h1>

          <p className={styles.sub}>
            Hi, I'm Keen — a web developer crafting modern,
            high-performance interfaces with clean code and
            thoughtful design.
          </p>

          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
              View Projects →
            </button>
            <button className={styles.btnGhost} onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
          </div>
        </div>

        {/* RIGHT — Terminal */}
        <div className={styles.right}>
          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <span className={`${styles.dot} ${styles.dotR}`} />
              <span className={`${styles.dot} ${styles.dotY}`} />
              <span className={`${styles.dot} ${styles.dotG}`} />
              <span className={styles.termTitle}>keen@dev ~ portfolio</span>
            </div>
            <div className={styles.termBody}>
              <div className={styles.termLine}>
                <span className={styles.prompt}>❯</span>
                <span className={styles.cmd}>whoami</span>
              </div>
              <div className={styles.output} style={{ color: 'var(--green)' }}>
                keen — web developer
              </div>
              <br />
              <div className={styles.termLine}>
                <span className={styles.prompt}>❯</span>
                <span className={styles.cmd}>cat skills.txt</span>
              </div>
              <div className={styles.output} style={{ color: '#c084fc' }}>React · Firebase · Tailwind</div>
              <div className={styles.output} style={{ color: '#c084fc' }}>Node.js · Vercel · Figma</div>
              <br />
              <div className={styles.termLine}>
                <span className={styles.prompt}>❯</span>
                <span className={styles.cmd}>ls projects/</span>
              </div>
              <div className={styles.output}>staycation/&nbsp;&nbsp;rentflow/</div>
              <br />
              <div className={styles.termLine}>
                <span className={styles.prompt}>❯</span>
                <span className={styles.cursor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
