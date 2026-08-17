import { useState, type ComponentType } from 'react'
import { catalog } from './catalog'

// Family yang dikelompokkan shadcn-style (di-collapse default)
const SHADCN_FAMILIES = new Set(['bar', 'radar', 'pie', 'area', 'line', 'tooltip', 'radial'])

export default function App() {
  const [active, setActive] = useState(catalog[0]?.id ?? '')
  const [dark, setDark] = useState(false)
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})

  const current = catalog.find((c) => c.id === active) ?? catalog[0]

  const groups = catalog.reduce<Record<string, typeof catalog>>((acc, c) => {
    ;(acc[c.family] ??= []).push(c)
    return acc
  }, {})

  const isShadcn = (family: string) => SHADCN_FAMILIES.has(family)
  const isCollapsed = (family: string) =>
    collapsed[family] ?? isShadcn(family) // default: shadcn collapsed

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <aside className="fixed inset-y-0 left-0 w-72 overflow-y-auto border-r border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-900">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
            <div>
              <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                TanStack Charts
              </div>
              <div className="text-xs text-slate-400">{catalog.length} examples</div>
            </div>
            <button
              onClick={() => setDark((d) => !d)}
              className="rounded-lg border border-slate-200 px-2 py-1 text-sm dark:border-slate-700"
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </div>
          <nav className="px-2 pb-6 pt-2">
            {Object.entries(groups)
              .sort(([a], [b]) => Number(isShadcn(a)) - Number(isShadcn(b)) || a.localeCompare(b))
              .map(([family, cases]) => (
                <div key={family} className="mb-1">
                  <button
                    onClick={() => setCollapsed((c) => ({ ...c, [family]: !isCollapsed(family) }))}
                    className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    <span>
                      {family} <span className="text-slate-300 dark:text-slate-600">({cases.length})</span>
                    </span>
                    <span className="text-[10px]">{isCollapsed(family) ? '▸' : '▾'}</span>
                  </button>
                  {!isCollapsed(family) && (
                    <div className="mb-1">
                      {cases.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setActive(c.id)}
                          className={`block w-full rounded-md px-2 py-1 text-left text-[13px] transition-colors ${
                            active === c.id
                              ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'
                              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                          }`}
                        >
                          {c.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </nav>
        </aside>

        <main className="ml-72">
          <header className="border-b border-slate-200 bg-white/70 px-6 py-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <h1 className="text-xl font-bold">{current.title}</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{current.intent}</p>
          </header>
          <div className="px-6 py-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <current.Component />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
