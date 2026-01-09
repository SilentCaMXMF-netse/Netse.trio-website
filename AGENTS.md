# AGENTS.md

This file provides guidelines for AI agents working on this codebase.

## Project Overview

Static website for Portuguese music trio "Não És Tu Sou Eu" (Netse). The site showcases the band's music, discography, events schedule, gallery, and contact information.

- **Stack:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Language:** Portuguese (pt-PT)
- **Output:** Static HTML served directly

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

## Code Style Guidelines

### HTML

- Use semantic elements (`<section>`, `<nav>`, `<main>`, `<footer>`)
- Include `lang="pt-PT"` on `<html>` tag
- Add accessibility attributes: `aria-label`, `aria-live`, `aria-hidden`
- Use `.sr-only` class for screen reader-only labels
- Include `.skip-link` for keyboard navigation
- All external links must have `target="_blank" rel="noopener"`

```html
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
- `styles.css` - All styles (no external CSS files)
- `script.js` - All JavaScript functionality

### External Resources

- Fonts: Google Fonts (Montserrat)
- Images: Local assets in `assets/images/` directory
- No local assets required

## Portuguese Content

- Keep section headings in lowercase
- Date format: `OUT 05 | 2024 - Location`
- Contact form: Portuguese labels and validation messages
- Maintain existing Portuguese text verbatim

## Development Workflow

1. Make changes to HTML/CSS/JS files
2. Preview locally to verify functionality
3. Test responsiveness across breakpoints
4. Verify accessibility with keyboard-only navigation
5. Test reduced motion preference

## Testing Checklist

- [ ] Mobile menu toggle works
- [ ] Smooth scroll for anchor links
- [ ] Gallery slider navigation (buttons, dots, keyboard, swipe)
- [ ] Lightbox opens/closes correctly
- [ ] Form validation displays errors
- [ ] Success message appears on submission
- [ ] Social links open in new tab
- [ ] Footer social icons hover effects
- [ ] Button ripple click effect
- [ ] Animations respect reduced motion
