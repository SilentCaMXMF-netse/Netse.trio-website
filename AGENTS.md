# AGENTS.md

This file provides guidelines for AI agents working on this codebase.

## Project Overview

Static website for Portuguese music trio "Não És Tu Sou Eu" (Netse). The site showcases the band's music, discography, events schedule, gallery, repertoire, and contact information.

- **Stack:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Language:** Portuguese (pt-PT)
- **Output:** Static HTML served directly
- **Hosting:** GitHub Pages with custom domain www.netse.pt
- **Form Handling:** Formspree API integration
- **Live URL:** https://www.netse.pt

## Recent Changes

### Migration Completed (2026-02-11)
- ✅ Migrated from Wix to GitHub Pages
- ✅ Configured custom domain www.netse.pt with DNS
- ✅ Added HTTPS support
- ✅ Created reportorio.html subpage
- ✅ Updated Formspree endpoint to new account
- ✅ Implemented SEO optimizations (meta tags, Schema.org, sitemap)
- ✅ Updated form styling with transparent backgrounds
- ✅ Increased section title images by 25%
- ✅ Updated all external links (Dropbox → Proton Drive)

## Commands

### Preview Locally

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Access at `http://localhost:8000`

### Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

## Code Style Guidelines

### HTML

- Use semantic elements (`<section>`, `<nav>`, `<main>`, `<footer>`)
- Include `lang="pt-PT"" on `<html>` tag
- Add accessibility attributes: `aria-label`, `aria-live`, `aria-hidden`
- Use `.sr-only` class for screen reader-only labels
- Include `.skip-link` for keyboard navigation
- All external links must have `target="_blank" rel="noopener"`
- Add hidden H1/H2 headings for SEO when using image titles

```html
<!-- Example: Hidden heading for SEO -->
<h2 class="sr-only">Discografia</h2>
<img src="title.png" alt="" role="presentation">

<!-- Example: External link -->
<a href="https://example.com" target="_blank" rel="noopener" aria-label="Description">
```

### CSS

- Define all colors and spacing in `:root` CSS custom properties
- Use `var(--property-name)` throughout the stylesheet
- Responsive units: `clamp()` for fluid typography and spacing
- Mobile-first approach with `min-width` media queries
- Include accessibility features:

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}

@media (prefers-contrast: high) {
    /* High contrast adjustments */
}
```

- Class naming: BEM-inspired with lowercase and hyphens
- Section titles: lowercase text (`text-transform: lowercase`)
- Focus indicators: `outline: 2px solid var(--color-primary)` with offset
- Form inputs: transparent background with bottom border line only

### JavaScript

- Use vanilla DOM APIs (no jQuery or frameworks)
- Wrap event listeners in null checks:

```javascript
const element = document.querySelector('.selector');
if (element) {
    element.addEventListener('click', handler);
}
```

- Use `DOMContentLoaded` for initialization
- Event delegation for repeated elements
- Portuguese field names in form handling (`nome`, `sobrenome`, `email`, `assunto`, `mensagem`)
- Add `aria-invalid` and `aria-live` for form validation
- Include keyboard support (Escape to close modals, arrow keys for sliders)
- Form submission via fetch API to Formspree:

```javascript
const response = await fetch('https://formspree.io/f/xykdkzkk', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formObject)
});
```

### Accessibility Requirements

All changes must maintain WCAG 2.1 AA compliance:

- [ ] Skip navigation link present
- [ ] All images have descriptive `alt` text
- [ ] Form inputs have associated labels
- [ ] Focus visible on all interactive elements
- [ ] Keyboard navigation works (Tab, Enter, Escape, Arrow keys)
- [ ] Color contrast meets minimum ratios (4.5:1 normal text)
- [ ] Reduced motion preference respected
- [ ] Screen reader announcements for dynamic content

### Form Validation

Portuguese form validation patterns:

```javascript
const validators = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    required: v => v.trim() !== '',
    minLength: min => v => v.trim().length >= min
};
```

### File Organization

- `index.html` - Main page structure
- `reportorio.html` - Repertoire page
- `styles.css` - All styles (no external CSS files)
- `script.js` - All JavaScript functionality
- `CNAME` - GitHub Pages custom domain configuration
- `sitemap.xml` - SEO sitemap
- `robots.txt` - Search engine instructions

### External Resources

- Fonts: Google Fonts (Montserrat)
- Images: Local assets in `assets/images/` directory
  - Logo and branding: `assets/images/logo-*.png`, `assets/images/icon.png`
  - Section titles: `assets/images/sections/`
  - Gallery: `assets/images/gallery/`
  - Social icons: `assets/images/icons/`
  - Products: `assets/images/products/`
  - Background textures: `assets/images/paper-texture.jpg`
- Form Handling: Formspree (endpoint: https://formspree.io/f/xykdkzkk)
- Dossier Link: Proton Drive (https://drive.proton.me/urls/1JG05H60P4#pmdeTvM4lI8e)

## Portuguese Content

- Keep section headings in lowercase
- Date format: `NOV / DEZ || 2026 - Event Name || Location`
- Contact form: Portuguese labels and validation messages
- Maintain existing Portuguese text verbatim
- Form field names: `nome`, `sobrenome`, `email`, `assunto`, `mensagem`

## SEO Guidelines

- Add meta description (150-160 chars)
- Include Open Graph and Twitter Card meta tags
- Add JSON-LD Schema.org structured data
- Create/update sitemap.xml for new pages
- Use semantic HTML headings (H1, H2)
- Add canonical URLs
- Include alt text for all images

## Development Workflow

1. Make changes to HTML/CSS/JS files
2. Preview locally to verify functionality
3. Test responsiveness across breakpoints
4. Verify accessibility with keyboard-only navigation
5. Test reduced motion preference
6. Commit with descriptive messages in English
7. Push to GitHub
8. Wait for GitHub Pages deployment (1-2 minutes)
9. Test on live site

## Testing Checklist

- [ ] Mobile menu toggle works
- [ ] Smooth scroll for anchor links
- [ ] Gallery slider navigation (buttons, dots, keyboard, swipe)
- [ ] Form validation displays errors
- [ ] Success message appears on submission
- [ ] Formspree integration works (test submission)
- [ ] Social links open in new tab
- [ ] Footer social icons hover effects
- [ ] Button ripple click effect
- [ ] Animations respect reduced motion
- [ ] Reportório page loads correctly
- [ ] All images load properly
- [ ] Custom domain resolves correctly
- [ ] HTTPS works

## DNS Configuration Reference

When making DNS changes:

**A Records for apex domain (netse.pt):**
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**CNAME for www subdomain:**
- www → silentcamxmf-netse.github.io

**Important:** Do not create both A records and CNAME for the same subdomain.

## Contact Information

- **Band Email:** netse.trio@gmail.com
- **Repository:** https://github.com/SilentCaMXMF-netse/Netse.trio-website
- **Live Site:** https://www.netse.pt
