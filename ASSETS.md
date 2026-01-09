# Assets Inventory

This document catalogs all local assets used in the Netse website project.

## Directory Structure

```
assets/images/
├── icons/              # Social media icons (30x30px)
│   ├── instagram.png
│   ├── youtube.png
│   ├── bandcamp.png
│   └── spotify.png
├── sections/           # Section title graphics
│   ├── discografia-title.png   # 403x86px
│   ├── agenda-title.png        # 344x86px
│   └── contactos-title.png    # 371x86px
├── gallery/            # Gallery slider images (1440x810px)
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   └── gallery-4.jpg
├── products/           # Product images
│   └── cd-cover.jpg            # 575x575px
└── existing/           # Original local assets
    ├── logo-netse.png
    ├── pdx_nao-es-tu-sou-eu.png
    ├── paper-texture.jpg
    ├── icon.png
    ├── logo-netse2.jpg
    └── NETSE_Interior_tripla_High copy.jpg
```

## Asset Details

### Social Media Icons
- **instagram.png** - 1.1KB - Instagram icon (30x30px)
- **youtube.png** - 949B - YouTube icon (30x30px)
- **bandcamp.png** - 1.1KB - Bandcamp icon (30x30px)
- **spotify.png** - 1.1KB - Spotify icon (30x30px)

### Section Title Graphics
- **discografia-title.png** - 15KB - Discografia section header (403x86px)
- **agenda-title.png** - 14KB - Agenda section header (344x86px)
- **contactos-title.png** - 16KB - Contactos section header (371x86px)

### Gallery Images
- **gallery-1.jpg** - 136KB - Gallery slide 1 (1440x810px)
- **gallery-2.jpg** - 142KB - Gallery slide 2 (1440x810px)
- **gallery-3.jpg** - 137KB - Gallery slide 3 (1440x810px)
- **gallery-4.jpg** - 173KB - Gallery slide 4 (1440x810px)

### Product Images
- **cd-cover.jpg** - 64KB - Album cover image (575x575px)

## Usage in HTML

### Icons Usage
- **Social Icons Bar** (lines 22-28)
- **Footer Social Links** (lines 194-205)

### Section Titles Usage
- **Discografia** (line 91)
- **Agenda** (line 115)  
- **Contactos** (line 165)

### Gallery Usage
- **Gallery Slider** (lines 135-144)
- All 4 gallery images are used in slider with active/inactive states

### Product Usage
- **CD Cover** (line 99) - Featured in Discografia section

## Migration History

**Date:** 2026-01-09
**Source:** Wix static CDN (static.wixstatic.com)
**Reason:** Eliminate external dependency and ensure project portability
**Total Assets Migrated:** 12 unique assets (14 references in HTML)

## Quality Notes

- All images maintain original maximum quality settings
- Icons use PNG format with transparency support
- Photographs use JPEG format for optimal compression
- Gallery images maintain high resolution for full-screen viewing
- Section titles preserve original styling and dimensions

## Backup

Original HTML file with Wix URLs preserved as `index.html.backup`
Revert if needed by: `cp index.html.backup index.html`