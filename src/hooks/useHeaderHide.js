import { useEffect, useState } from 'react'

export function useHeaderHide() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > lastY && currentY > 80)
      lastY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}
