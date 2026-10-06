import { useEffect } from 'react'

const SITE_NAME = 'Jaringan Rumah 2 Lantai'

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE_NAME}` : SITE_NAME
  }, [title])
}
