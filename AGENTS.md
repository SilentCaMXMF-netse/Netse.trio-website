# AGENTS.md

Guidelines for AI agents working on this project.

## Project Overview

- **Site:** https://www.netse.pt
- **Stack:** Vanilla HTML/CSS/JS
- **Hosting:** GitHub Pages
- **Domain:** www.netse.pt (managed via GitHub)

## Deployment

Auto-deploys on push to `main` branch via GitHub Pages.

## Structure

```
├── index.html          # Homepage
├── agenda.html         # Events page
├── reportorio.html     # Repertoire page
├── styles.css          # All styles
├── script.js           # All JS
└── assets/images/      # Static assets
```

## DNS Setup

- **A Records:** netse.pt → GitHub Pages IPs
- **CNAME:** www → silentcamxmf-netse.github.io
- **SSL:** Auto-provisioned by GitHub

## Form Handling

Formspree endpoint: `https://formspree.io/f/xykdkzkk`

## Style Guide

- Portuguese content (pt-PT)
- Lowercase headings
- Green theme (#7D8D68)
- Transparent form inputs
- Responsive design

## Commands

```bash
# Local preview
python3 -m http.server 8000

# Deploy
git add . && git commit -m "message" && git push origin main
```

## External Links

- Dossier: https://drive.proton.me/urls/1JG05H60P4#pmdeTvM4lI8e
- Bandcamp: https://noestusoueu.bandcamp.com/

## Contact

netse.trio@gmail.com | +351 912 427 016
