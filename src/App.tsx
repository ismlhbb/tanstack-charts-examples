import { useState, type ComponentType } from 'react'
import { catalog } from './catalog'

export default function App() {
  const [active, setActive] = useState(catalog[0]?.id ?? '')
  const [dark, setDark] = useState(false)

  const current = catalog.find((c) => c.id === active) ?? catalog[0]

  // group by family
  const groups = catalog.reduce<Record<string, typeof catalog>>((acc, c) => {
    ;(acc[c.family] ??= []).push(c)
    return acc
  }, {})

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <aside className="fixed inset-y-0 left-0 w-64 overflow-y-auto border-r border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between px-4 py-4">
            <div>
              <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                TanStack Charts
              </div>
              <div className="text-xs text-slate-400">Example Catalog</div>
            </div>
            <button
              onClick={() => setDark((d) => !d)}
              className="rounded-lg border border-slate-200 px-2 py-1 text-sm dark:border-slate-700"
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </div>
          <nav className="px-2 pb-6">
            {Object.entries(groups).map(([family, cases]) => (
              <div key={family} className="mb-3">
                <div className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {family}
                </div>
                {cases.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={`block w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                      active === c.id
                        ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        <main className="ml-64">
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
