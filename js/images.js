/**
 * =============================================================================
 * IMAGE CONFIG — edit paths here to swap photos across the whole site
 * =============================================================================
 * Put your image files in: assets/images/
 * See assets/images/README.md for folder layout and recommended sizes.
 */

const SITE_IMAGES = {
  // ---------------------------------------------------------------------------
  // PROFILE (About sidebar — circular headshot)
  // ---------------------------------------------------------------------------
  profile: "assets/images/profile.jpg",

  // ---------------------------------------------------------------------------
  // HERO CAROUSEL (index.html — full-width banner slides)
  // Replace each file under assets/images/hero/
  // ---------------------------------------------------------------------------
  heroSlides: [
    {
      src: "assets/images/hero/hero-slide-1.jpg",
      title: "NASA LunaRecycle",
      subtitle: "Phase 2 Finalist",
      link: "projects.html#lunarecycle",
    },
    {
      src: "assets/images/hero/hero-slide-2.jpg",
      title: "Ocean Plastics",
      subtitle: "CubeSat Mission Concept",
      link: "projects.html#cubesat",
    },
    {
      src: "assets/images/hero/hero-slide-3.jpg",
      title: "Digital Twin",
      subtitle: "RECLAIM Systems Engineering",
      link: "projects.html#digital-twin",
    },
    {
      src: "assets/images/hero/hero-slide-4.jpg",
      title: "Space Systems",
      subtitle: "Research & Engineering",
      link: "research.html",
    },
  ],

  // ---------------------------------------------------------------------------
  // PROJECT CARD THUMBNAILS (projects.html)
  // ---------------------------------------------------------------------------
  projects: {
    lunarecycle: "assets/images/projects/lunarecycle.jpg",
    cubesat: "assets/images/projects/cubesat.jpg",
    groundStation: "assets/images/projects/ground-station.jpg",
    digitalTwin: "assets/images/projects/digital-twin.jpg",
    gasPayload: "assets/images/projects/gas-payload.jpg",
    hpmResearch: "assets/images/projects/hpm-research.jpg",
  },

  // ---------------------------------------------------------------------------
  // RESEARCH PAGE FEATURE IMAGES (research.html)
  // ---------------------------------------------------------------------------
  research: {
    hero: "assets/images/research/research-hero.jpg",
    hpm: "assets/images/research/hpm-lunar.jpg",
    lunarecycle: "assets/images/research/lunarecycle-research.jpg",
  },

  // ---------------------------------------------------------------------------
  // OPTIONAL: company / org logos in Experience section (index.html)
  // Leave blank string "" to hide a logo slot
  // ---------------------------------------------------------------------------
  logos: {
    sdl: "assets/images/logos/sdl.png",
    sspl: "assets/images/logos/sspl.png",
    nasa: "assets/images/logos/nasa.png",
    pennState: "assets/images/logos/penn-state.png",
    spel: "assets/images/logos/spel.png",
  },
};
