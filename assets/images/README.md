# Image Assets Guide

Drop your photos into the folders below. The site reads paths from **`js/images.js`** — edit that file if you rename files.

## Folder layout

```
assets/images/
├── profile.jpg              ← Circular headshot (About sidebar) ✅ included
├── hero/
│   ├── hero-slide-1.jpg     ← Carousel slide 1 (NASA LunaRecycle)
│   ├── hero-slide-2.jpg     ← Carousel slide 2 (CubeSat)
│   ├── hero-slide-3.jpg     ← Carousel slide 3 (Digital Twin)
│   └── hero-slide-4.jpg     ← Carousel slide 4 (Space Systems)
├── projects/
│   ├── lunarecycle.jpg
│   ├── cubesat.jpg
│   ├── ground-station.jpg
│   ├── digital-twin.jpg
│   ├── gas-payload.jpg
│   └── hpm-research.jpg
├── research/
│   ├── research-hero.jpg    ← Full-width banner on research.html
│   ├── hpm-lunar.jpg
│   └── lunarecycle-research.jpg
└── logos/                   ← Optional org logos (hidden if missing)
    ├── sdl.png
    ├── sspl.png
    ├── nasa.png
    ├── penn-state.png
    └── spel.png
```

## Recommended sizes

| Slot | Size | Notes |
|------|------|-------|
| Profile | 400×400 px | Square; cropped to circle |
| Hero slides | 1600×700 px | Landscape banner |
| Project cards | 800×500 px | 16:10 aspect ratio |
| Research hero | 1400×500 px | Wide banner |
| Research items | 800×600 px | 4:3 aspect ratio |
| Logos | 112×112 px | PNG with transparent bg |

## Quick start

1. Copy photos from your Downloads folder into the paths above.
2. Or edit `js/images.js` to point at different filenames.
3. Missing images show a striped placeholder with the expected path.

Your existing photos you can use:
- `julianruocco.jpg` → already copied to `profile.jpg`
- `julian2.jpg` → good for a hero slide or project thumbnail
- `julianpassport.jpg` → alternate profile photo
