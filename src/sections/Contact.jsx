import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Contact.module.css'

// ── EmailJS config ─────────────────────────────────────────
const EJS_PUBLIC_KEY  = 'o3xDufRKMviGoYHdO'
const EJS_SERVICE_ID  = 'service_9zcwi9e'
const EJS_TEMPLATE_TO_YOU  = 'template_6olzuso'  // notification to you
const EJS_TEMPLATE_TO_USER = 'template_kkutuq8'  // auto-reply to sender
// ──────────────────────────────────────────────────────────

emailjs.init({ publicKey: EJS_PUBLIC_KEY })

export default function Contact() {
  const labelRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const subRef   = useScrollReveal()
  const formRef  = useScrollReveal()

  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // 1. Send notification to you
      await emailjs.send(EJS_SERVICE_ID, EJS_TEMPLATE_TO_YOU, {
        from_name:  form.from_name,
        from_email: form.from_email,
        message:    form.message,
      })

      // 2. Send auto-reply to the user
      await emailjs.send(EJS_SERVICE_ID, EJS_TEMPLATE_TO_USER, {
        from_name:  form.from_name,
        from_email: form.from_email,
        message:    form.message,
      })

      setStatus('success')
      setForm({ from_name: '', from_email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <p ref={labelRef} className={`${styles.label} reveal`}>Contact</p>
        <h2 ref={titleRef} className={`${styles.title} reveal`}>Let's work together</h2>
        <p ref={subRef} className={`${styles.sub} reveal`}>
          Have a project in mind or just want to say hi?<br />
          Send me a message and I'll get back to you.
        </p>

        <form
          ref={formRef}
          className={`${styles.form} reveal`}
          onSubmit={handleSubmit}
        >
          <div className={styles.row}>
            <div className={styles.group}>
              <label className={styles.fieldLabel}>name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                value={form.from_name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.group}>
              <label className={styles.fieldLabel}>email</label>
              <input
                type="email"
                name="from_email"
                placeholder="your@email.com"
                value={form.from_email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.group}>
            <label className={styles.fieldLabel}>message</label>
            <textarea
              name="message"
              placeholder="What's on your mind?"
              value={form.message}
              onChange={handleChange}
              className={styles.textarea}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.btn}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message →'}
          </button>

          {status === 'success' && (
            <p className={styles.success}>✓ Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className={styles.error}>Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
