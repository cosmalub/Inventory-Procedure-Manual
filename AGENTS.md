# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

A printable A4-format inventory procedure manual (инструкция по инвентаризации) for retail store employees. Built as a single-page React app that renders paginated document pages viewable in browser and printable to PDF via `Ctrl/Cmd + P`. All content is in Russian.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start Vite dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run lint` — run ESLint (`eslint . --ext .js,.jsx,.ts,.tsx`)
- `npm run preview` — preview production build

No test framework is configured.

## Architecture

**Single-component app.** The entire document lives in `src/App.tsx` (~1800 lines). There is no routing, no state management, and no API calls. The app is purely presentational.

### Page structure

`App.tsx` contains ~30 React functional components, each representing one A4 page of the manual. They are rendered sequentially inside a `document-container` div in the `App` component. The rendering order in `App()` determines the page order of the printed document.

Each page is wrapped in a `Page` component that applies A4 dimensions (210mm × 297mm), padding/margins, and an optional page number. Reusable layout helpers (`TOCItem`, `FlowArrow`, `MainBlock`, `SecondaryStep`, `ScreenshotStep`, `ScreenshotSteps`) handle common patterns like flowchart blocks and screenshot step grids.

### Styling

- Tailwind CSS (v3) via PostCSS — utility classes are used inline throughout JSX
- `src/index.css` contains Tailwind imports, global body styles, `.a4-page` / `.document-container` layout, and `@media print` rules that remove shadows/gaps and enforce `page-break-after: always`
- Inter font loaded from Google Fonts

### Static assets

`public/` contains ~34 JPG screenshot images (named `IMG_*.jpg`) referenced directly in `<img src="/IMG_*.jpg">` tags. These are photos of the POS/scanner (ТСД) screens used as step-by-step illustrations.

### Key dependencies

- `react` 18 with legacy `render()` API (not `createRoot`)
- `lucide-react` for icons (`FileText`, `CheckCircle2`, `ArrowDown`, `AlertTriangle`, `Monitor`, `Smartphone`, `QrCode`, `ClipboardList`)
- `@emotion/react` (listed but not directly imported in current code)
- Vite 5 + `@vitejs/plugin-react`

### TypeScript

Strict mode enabled (`tsconfig.json`): `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`. Target ES2020, JSX react-jsx.

## Conventions

- All manual content (headings, descriptions, UI labels) is written in Russian
- Component naming follows the document section structure: `TitlePage`, `TableOfContents`, `GeneralProvisions`, `Step1Detail`, `WritingShowcase`, `ShiftClosing`, `AllRemainders`, `SyncScanners`, `Verification`, `DataExport`, `FillActs`, `Contacts`
- Continuation pages use suffixed names: `Step1DetailCont`, `Step1DetailCont2`, `Step1Detail2a`, etc.
- QR code placeholders use `lucide-react`'s `QrCode` icon with placeholder text (actual QR images not yet embedded)
