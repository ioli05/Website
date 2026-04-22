# Ortho X-Ray Clinic - Website Medical

## Overview
Website pentru clinică medicală cu 2 pagini principale (Acasă, Servicii) și secțiuni inline pentru Echipa și Programare, dezvoltat cu Next.js 15 și TailwindCSS. Optimizat pentru deploy pe Vercel.

## Tech Stack
- Framework: Next.js 15 (App Router)
- UI: shadcn/ui + TailwindCSS v4
- Icons: lucide-react
- Images: next/image cu optimizare automată
- Fonts: Geist Sans/Mono
- Email: Resend API pentru programări

## Directory Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout cu Header/Footer/FloatingButtons
│   ├── page.tsx          # Pagina principală (Acasă) - include Echipa carousel și Programare
│   ├── servicii/page.tsx # Pagina Servicii cu prețuri
│   ├── programare/page.tsx # Pagina Programare cu formular
│   └── api/send-email/route.ts # API pentru trimitere emailuri
├── components/
│   ├── Header.tsx         # Header cu logo clinică și navigare
│   ├── Footer.tsx         # Footer cu informații contact
│   └── FloatingButtons.tsx # Butoane floating (telefon + programare)
└── ...
```

## Core Systems

### Design Medical
- Culori albastru clinic (oklch) pentru branding consistent
- Logo shield cu stilizare medicală
- Design minimal, profesional, clean

### Layout & Navigation
- Header sticky cu logo clinică și navigare (link-uri către secțiuni pe pagina principală)
- Footer cu 4 coloane: info, navigare, specialități, contact
- Floating buttons pentru telefon și programare

### Pagini Implementate
1. **Acasă** - Hero section, Specialități medicale, Servicii preview, Echipa în carousel (8 medici), Formular Programare
2. **Servicii** - Proces (3 pași), Categorii, Lista de prețuri pe specialități
3. **Programare** - Formular complet cu validare, informații contact

### Specialități Medicale
- Ortopedie
- Cardiologie
- Radiologie
- Reumatologie
- Chirurgie Plastică

### Echipa Medicală (Carousel)
- 8 medici în carousel pe pagina principală
- Navigare cu săgeți și puncte
- Afișare 4 medici simultan pe desktop

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg
- Container centrat cu max-width
- Grid responsive pe toate paginile

## SEO & Meta
- Metadata pentru fiecare pagină
- Open Graph tags
- Alt text pe toate imaginile
- Semantic HTML (header, main, footer, section, nav)

## Current State
- [x] Structură proiect Next.js 15 cu TailwindCSS
- [x] Layout global cu Header, Footer și FloatingButtons
- [x] Pagina Acasă cu toate secțiunile (incl. Echipa carousel)
- [x] Pagina Servicii cu proces și prețuri
- [x] Pagina Programare cu formular funcțional
- [x] Carousel echipă cu 8 medici pe pagina principală
- [x] Design medical cu tema albastru clinic
- [x] Responsive design complet
- [x] Build verification passing

## Maintenance Log
- 2026-04-21: Creat website clinică medicală Ortho X-Ray. Implementate pagini (Acasă, Servicii, Programare). Design cu tema medicală albastru. Floating buttons pentru contact.
- 2026-04-21: Adăugat carousel echipă pe pagina principală (8 medici). Actualizat navigarea să point-eze către secțiuni în loc de pagini separate. Șters pagina /echipa.
