import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** Scrolls to `#hash` targets after route changes, or to top when there is none. */
export function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const { hash } = location
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ block: 'start' })
      if (target instanceof HTMLElement) target.focus({ preventScroll: true })
    }
  }, [location])
}
