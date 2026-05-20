import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© 2026 keen.dev — built with ♥</p>
      <div className={styles.links}>
        {['home', 'about', 'projects', 'contact'].map(s => (
          <a key={s} href={`#${s}`} className={styles.link}>{s}</a>
        ))}
      </div>
    </footer>
  )
}
