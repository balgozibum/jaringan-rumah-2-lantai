import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface Column<Row> {
  key: string
  header: ReactNode
  render: (row: Row) => ReactNode
  align?: 'left' | 'right' | 'center'
  className?: string
}

interface DataTableProps<Row> {
  caption: string
  columns: Column<Row>[]
  rows: Row[]
  rowKey: (row: Row) => string
  /** Visually hide the caption while keeping it for screen readers. */
  hideCaption?: boolean
  className?: string
}

const alignClass = { left: 'text-left', right: 'text-right', center: 'text-center' }

export function DataTable<Row>({ caption, columns, rows, rowKey, hideCaption, className }: DataTableProps<Row>) {
  return (
    <div className={cn('my-6 overflow-x-auto rounded-md border border-border bg-bg-elev', className)}>
      <table className="w-full min-w-[40rem] border-collapse text-sm">
        <caption className={cn('px-4 py-3 text-left text-sm text-fg-muted', hideCaption && 'sr-only')}>
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-border bg-bg-sunken/60">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={cn(
                  'px-4 py-2.5 text-xs font-semibold text-fg-muted',
                  alignClass[column.align ?? 'left'],
                  column.className,
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={rowKey(row)} className="border-b border-border last:border-b-0 hover:bg-bg-sunken/40">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={cn('px-4 py-3 align-top', alignClass[column.align ?? 'left'], column.className)}
                >
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
