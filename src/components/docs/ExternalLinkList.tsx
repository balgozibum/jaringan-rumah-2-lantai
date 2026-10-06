import { ExternalLink } from 'lucide-react'

interface ExternalLinkListProps {
  links: { label: string; url: string }[]
}

export function ExternalLinkList({ links }: ExternalLinkListProps) {
  return (
    <ul className="my-3 space-y-1.5 pl-0">
      {links.map((link) => (
        <li key={link.url} className="flex">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-1.5 text-[0.95rem] text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            <span>{link.label}</span>
            <ExternalLink aria-hidden="true" className="mt-1.5 size-3.5 shrink-0" />
            <span className="sr-only">(tab baru)</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
