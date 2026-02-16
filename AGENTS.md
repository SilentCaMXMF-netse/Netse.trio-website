# AGENTS.md

Guidelines for AI agents working on this codebase.

## Project Overview

- **Site:** https://www.netse.pt
- **Stack:** Vanilla HTML5, CSS3, JavaScript (no frameworks)
- **Hosting:** GitHub Pages with custom domain
- **Domain:** www.netse.pt
- **Language:** Portuguese (pt-PT)

## Project Structure

```
├── index.html              # Homepage
├── agenda.html             # Events page
├── reportorio.html         # Repertoire page
├── styles.css              # All CSS styles
├── script.js               # All JavaScript
├── CNAME                   # GitHub Pages domain config
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine instructions
└── assets/images/          # Static assets
    ├── sections/           # Page title images
    ├── gallery/            # Gallery photos
    ├── icons/              # Social media icons
    └── products/           # Product images
```

## Commands

### Local Development
```bash
# Start local server
python3 -m http.server 8000

# Or with Node.js
npx serve .

# Or with PHP
php -S localhost:8000
```

### Validation & Testing
```bash
# Validate HTML (using W3C validator CLI)
curl -H "Content-Type: text/html; charset=utf-8" \
     --data-binary @index.html \
     https://validator.w3.org/nu/?out=json

# Validate CSS
curl -H "Content-Type: text/css; charset=utf-8" \
     --data-binary @styles.css \
     https://jigsaw.w3.org/css-validator/validator?output=json

# Check links
npx hyperlink *.html --canonicalroot https://www.netse.pt

# Run a single file validation
python3 -c "import html.parser; html.parser.HTMLParser().feed(open('index.html').read())"
```

### Browser Automation (Playwright)
```bash
# Create a session (do this once)
npx playwriter session new

# Navigate to page and get title
npx playwriter -s 1 -e "page.goto('https://www.netse.pt').then(() => page.title()).then(t => console.log(t))"

# Click a link and navigate
npx playwriter -s 1 -e "page.goto('https://www.netse.pt').then(() => page.click('text=reportório')).then(() => page.url()).then(u => console.log(u))"

# Get page HTML content
npx playwriter -s 1 -e "page.goto('https://www.netse.pt/reportorio.html').then(() => page.content()).then(c => console.log(c.substring(0, 1000)))"

# Take screenshot
npx playwriter -s 1 -e "page.goto('https://www.netse.pt').then(() => page.screenshot({path: 'screenshot.png'}))"

# Fill form and submit
npx playwriter -s 1 -e "page.goto('https://www.netse.pt/#contactos').then(() => page.fill('#name', 'Test')).then(() => page.fill('#email', 'test@test.com')).then(() => page.click('button[type=submit]'))"

# Get console logs from page
npx playwriter -s 1 -e "page.goto('https://www.netse.pt').then(() => page.evaluate(() => console.log('Hello from page')))"

# Wait for element and click
npx playwriter -s 1 -e "page.goto('https://www.netse.pt').then(() => page.waitForSelector('text=reportório')).then(() => page.click('text=reportório'))"

# Delete session when done
npx playwriter session delete 1
```

### Deployment
```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "fix: correct agenda event date"

# Push to main (auto-deploys to GitHub Pages)
git push origin main

# Check deployment status
gh run list --repo SilentCaMXMF-netse/Netse.trio-website
```

## Code Style Guidelines

### HTML
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Always include `lang="pt-PT"` on `<html>` tag
- Use double quotes for attributes
- Indent with 4 spaces
- Close all tags properly
- Include `alt` attributes on all images
- Add `aria-label` for accessibility on interactive elements
- External links must have `target="_blank" rel="noopener"`

### CSS
- Use CSS custom properties (variables) for colors
- Class naming: BEM-inspired lowercase with hyphens
- Indent with 4 spaces
- Mobile-first approach
- Use `var(--color-primary)` for theme colors
- Section titles: `text-transform: lowercase`
- Form inputs: transparent background with bottom border
- Include accessibility media queries:
```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
    }
}
```

### JavaScript
- Use vanilla JS (no frameworks)
- Always check for null before adding event listeners:
```javascript
const element = document.querySelector('.selector');
if (element) {
    element.addEventListener('click', handler);
}
```
- Wrap code in `DOMContentLoaded` listener
- Use const/let (no var)
- Indent with 4 spaces
- Prefer template literals for strings with variables
- Use Portuguese field names for forms: `nome`, `email`, `mensagem`

## Naming Conventions

### Files
- HTML: lowercase, hyphens for spaces: `agenda-completa.html`
- CSS/JS: lowercase, matches HTML name: `agenda.css`
- Images: lowercase, descriptive: `logo-netse.png`, `gallery-1.jpg`

### CSS Classes
- BEM-style: `.block__element--modifier`
- Components: `.btn`, `.nav-link`, `.section-title`
- Utilities: `.text-center`, `.mb-2`, `.sr-only`

### Variables
- CSS: `--color-primary`, `--font-primary`, `--spacing-md`
- JS: camelCase for variables, PascalCase for classes

## Error Handling

### JavaScript
```javascript
// Always check DOM elements exist
const form = document.querySelector('.contact-form');
if (!form) return;

// Wrap async operations in try-catch
try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Request failed');
} catch (error) {
    console.error('Form submission failed:', error);
    showErrorMessage('Erro ao enviar. Tente novamente.');
}
```

### Form Validation
- Validate on submit, not just on blur
- Show clear error messages in Portuguese
- Use `aria-invalid` for accessibility
- Prevent default on invalid submissions

## SEO Requirements

- Meta description: 150-160 characters
- Include Open Graph and Twitter Card meta tags
- Use Schema.org JSON-LD structured data
- Create/update sitemap.xml for new pages
- Use semantic HTML headings (H1, H2 hierarchy)
- Include canonical URLs
- All images must have descriptive alt text

## Accessibility (WCAG 2.1 AA)

- Skip navigation link present
- All images have alt text
- Form inputs have associated labels
- Focus visible on interactive elements
- Keyboard navigation works (Tab, Enter, Escape)
- Color contrast minimum 4.5:1
- Respect prefers-reduced-motion
- Screen reader announcements for dynamic content

## DNS & Hosting

- **A Records:** netse.pt → 185.199.108-111.153
- **CNAME:** www → silentcamxmf-netse.github.io
- **SSL:** Auto-provisioned by GitHub Pages
- **Deploy:** Push to main branch

## External Services

- **Formspree:** https://formspree.io/f/xykdkzkk
- **Dossier:** https://drive.proton.me/urls/1JG05H60P4#pmdeTvM4lI8e
- **Bandcamp:** https://noestusoueu.bandcamp.com/

## Contact

netse.trio@gmail.com | +351 912 427 016
