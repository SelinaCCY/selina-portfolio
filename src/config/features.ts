/**
 * Feature flags.
 *
 * SHOW_PROJECTS: the Projects section is still a work in progress, so it is
 * hidden by default (section, nav/footer links, and the hero "See Projects" CTA).
 * Flip the fallback below to `true`, or set VITE_SHOW_PROJECTS=true in the
 * environment (e.g. in a Vercel preview deployment), to show it.
 */
export const SHOW_PROJECTS = import.meta.env.VITE_SHOW_PROJECTS
  ? import.meta.env.VITE_SHOW_PROJECTS === 'true'
  : false;
