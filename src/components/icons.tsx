export function DownloadIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14">
      <path
        d="M7 1 L7 10 M3 7 L7 11 L11 7 M2 13 L12 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ScrollArrowIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20">
      <path
        d="M9 2 L9 16 M3 10 L9 16 L15 10"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', flexShrink: 0 }}
    >
      <path
        d="M3 6.5 L9 12.5 L15 6.5"
        fill="none"
        stroke="#9098b0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path
        d="M7 1 L8.6 5.4 L13.4 5.4 L9.5 8.3 L11.1 12.7 L7 9.8 L2.9 12.7 L4.5 8.3 L0.6 5.4 L5.4 5.4 Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" style={{ marginLeft: 'auto' }}>
      <path
        d="M3 7 L11 7 M7.5 3 L11.5 7 L7.5 11"
        stroke="#c0c8d8"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg width="16" height="13" viewBox="0 0 16 13">
      <rect x="0.75" y="0.75" width="14.5" height="11.5" rx="2" stroke="#5b9fd4" strokeWidth="1.4" fill="none" />
      <path d="M0.75 3 L8 8 L15.25 3" stroke="#5b9fd4" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <rect x="1" y="1" width="14" height="14" rx="3" stroke="#5b9fd4" strokeWidth="1.3" fill="none" />
      <path d="M4.5 6 L4.5 12 M4.5 3.5 L4.5 3.6" stroke="#5b9fd4" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 9 Q8 6.5 11.5 6.5 L11.5 12" stroke="#5b9fd4" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M8 1 C4.7 1 2 3.7 2 7 C2 9.6 3.6 11.8 5.9 12.65 C6.2 12.7 6.3 12.52 6.3 12.37 L6.3 11.25 C4.78 11.57 4.42 10.55 4.42 10.55 C4.16 9.92 3.78 9.73 3.78 9.73 C3.24 9.36 3.82 9.37 3.82 9.37 C4.42 9.41 4.74 9.99 4.74 9.99 C5.27 10.94 6.14 10.67 6.31 10.51 C6.36 10.12 6.52 9.85 6.69 9.7 C5.52 9.55 4.3 9.1 4.3 7.07 C4.3 6.47 4.52 5.98 4.86 5.59 C4.8 5.44 4.6 4.87 4.92 4.11 C4.92 4.11 5.42 3.95 6.3 4.6 C6.67 4.5 7.07 4.44 7.47 4.44 C7.87 4.44 8.27 4.5 8.64 4.6 C9.52 3.95 10.02 4.11 10.02 4.11 C10.34 4.87 10.14 5.44 10.08 5.59 C10.42 5.98 10.64 6.47 10.64 7.07 C10.64 9.11 9.42 9.55 8.25 9.69 C8.45 9.87 8.63 10.22 8.63 10.76 L8.63 12.37 C8.63 12.53 8.73 12.71 9.04 12.65 C11.36 11.8 12.94 9.59 12.94 7 C12.94 3.7 10.3 1 8 1 Z"
        fill="#5b9fd4"
      />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13">
      <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M6.5 3.5 L6.5 7 L9 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
