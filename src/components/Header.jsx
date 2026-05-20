import { useHeaderHide } from '../hooks/useHeaderHide'
import styles from './Header.module.css'

const navLinks = [
  { label: 'home',     href: '#home'     },
  { label: 'about',    href: '#about'    },
  { label: 'projects', href: '#projects' },
  { label: 'contact',  href: '#contact'  },
]

export default function Header() {
  const hidden = useHeaderHide()

  return (
    <header className={`${styles.header} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.logo}>
        keen<span className={styles.logoAccent}>.dev</span>
      </div>
      <nav className={styles.nav}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
