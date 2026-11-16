/**
 * Feature flags.
 *
 * SHOW_PROJECTS: controls the Projects section (the section itself, the
 * nav/footer links, and the hero "See Projects" CTA). It is on by default.
 * Set VITE_SHOW_PROJECTS=false in the environment to hide it again without
 * a code change.
 */
export const SHOW_PROJECTS = import.meta.env.VITE_SHOW_PROJECTS
  ? import.meta.env.VITE_SHOW_PROJECTS === 'true'
  : true;
