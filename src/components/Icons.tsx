import type { SVGProps } from "react";

// Simple line icons drawn for this site (24px grid, 1.75 stroke, currentColor).
// They replace the emoji used on the current site; all are decorative.
type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  );
}

export function HealthIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 20s-7.5-4.6-7.5-10A4.25 4.25 0 0 1 12 7.2 4.25 4.25 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
      <path d="M3 12.5h4.5L9 10l2.5 5 2-3.5H21" />
    </Icon>
  );
}

export function SproutIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21v-9" />
      <path d="M12 12C12 8.5 9.5 6 5 6c0 4 2.5 6 7 6Z" />
      <path d="M12 14.5c0-3.5 2.5-6 7-6 0 4-2.5 6-7 6Z" />
      <path d="M7 21h10" />
    </Icon>
  );
}

export function GovernanceIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4v16M8 20h8M5 7h14" />
      <path d="M5 7 2.5 13h5L5 7ZM19 7l-2.5 6h5L19 7Z" />
      <path d="M2.5 13a2.5 2.5 0 0 0 5 0M16.5 13a2.5 2.5 0 0 0 5 0" />
    </Icon>
  );
}

export function EnergyIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13 2 4.5 13.5H12l-1 8.5 8.5-11.5H12L13 2Z" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </Icon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}

export function WheatIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 22V9" />
      <path d="M12 9c-1.9-.7-3-2.4-3-4.5 1.9.7 3 2.4 3 4.5Zm0 0c1.9-.7 3-2.4 3-4.5-1.9.7-3 2.4-3 4.5Z" />
      <path d="M12 14c-2.1-.7-3.4-2.4-3.4-4.6 2.1.7 3.4 2.4 3.4 4.6Zm0 0c2.1-.7 3.4-2.4 3.4-4.6-2.1.7-3.4 2.4-3.4 4.6Z" />
      <path d="M12 19c-2.1-.7-3.4-2.4-3.4-4.6 2.1.7 3.4 2.4 3.4 4.6Zm0 0c2.1-.7 3.4-2.4 3.4-4.6-2.1.7-3.4 2.4-3.4 4.6Z" />
    </Icon>
  );
}

export function LightbulbIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.1v.1h5v-.1c0-.8.4-1.6 1.1-2.1A6 6 0 0 0 12 3Z" />
    </Icon>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="3.25" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M18 14.5a5.5 5.5 0 0 1 3 5" />
    </Icon>
  );
}
