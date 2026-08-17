# TanStack Charts — Example Catalog

Kumpulan contoh chart diambil langsung dari katalog resmi [TanStack Charts](https://tanstack.com/charts/catalog) — kode sumber asli dari repo [TanStack/charts](https://github.com/TanStack/charts) (`benchmarks/conformance/cases`).

## Cara pakai

```sh
pnpm install
pnpm dev       # dev server
pnpm build     # production build
```

## Struktur

- `src/cases/` — 24 contoh chart asli (kode dari repo TanStack, diadaptasi import-nya)
- `src/catalog.ts` — index katalog (auto-generated)
- `packages/charts-data/` — dataset resmi TanStack (copy dari `charts-demo-data`)

## Adaptasi

Kode contoh di repo TanStack memakai package internal `@tanstack/charts-data` (belum di npm). Dataset di-copy ke `packages/charts-data/` dan di-alias via Vite/tsconfig ke `@tanstack/charts-data`.
