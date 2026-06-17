export function PlaneSvg() {
  return (
    <svg viewBox="0 0 48 48">
      <path d="M44 24 L6 9 L19 24 Z" fill="#f4f0e6" stroke="#2b2925" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M44 24 L6 39 L19 24 Z" fill="#e7e0d2" stroke="#2b2925" strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
  );
}

export function PlaneSvgFull() {
  return (
    <svg viewBox="0 0 48 48">
      <path d="M44 24 L6 9 L19 24 Z" fill="#f4f0e6" stroke="#2b2925" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M44 24 L6 39 L19 24 Z" fill="#e7e0d2" stroke="#2b2925" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M19 24 L44 24" stroke="#2b2925" strokeWidth="1.4" />
    </svg>
  );
}

export function LinkedInSvg() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="#2b2925" strokeWidth="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" fill="none" stroke="#2b2925" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function EmailSvg({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" fill="none" stroke="#2b2925" strokeWidth="2" />
      <path d="M3.5 7l8.5 6 8.5-6" fill="none" stroke="#2b2925" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function GitHubSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <circle cx="12" cy="12" r="9.5" fill="none" stroke="#2b2925" strokeWidth="2" />
      <path d="M9 19c0-2 .2-3 .2-3M9 19v-2.5c-2.5.4-3-1.4-3.5-2.2M15 19v-3c0-1 .1-1.6-.5-2.2 2-.2 3.5-1 3.5-3.6a3 3 0 0 0-.8-2.1c.1-.3.4-1.2-.1-2.4 0 0-.9-.3-2.9 1.1a9.7 9.7 0 0 0-4.4 0C7.3 3.1 6.4 3.4 6.4 3.4c-.5 1.2-.2 2.1-.1 2.4a3 3 0 0 0-.8 2.1c0 2.6 1.5 3.4 3.5 3.6" fill="none" stroke="#2b2925" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LocationSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" fill="none" stroke="#2b2925" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" fill="none" stroke="#2b2925" strokeWidth="2" />
    </svg>
  );
}
