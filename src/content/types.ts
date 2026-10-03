// Shape of the homepage content. Today it is filled from local files
// (src/content/home.ts); a CMS adapter only has to return the same shape.

export type ThemeId = "health" | "agriculture" | "governance" | "energy";

export interface NavItem {
  label: string;
  href: string;
}

export interface Lab {
  shortName: string;
  name: string;
  expansion: string;
  university: string;
  college: string;
  motto: string;
  mission: string;
}

export interface VisionPillar {
  title: string;
  text: string;
}

export interface ResearchTheme {
  id: ThemeId;
  title: string;
  summary: string;
  focus: string[];
  sdg: { number: number; name: string };
}

export interface Person {
  name: string;
  role: string;
  degree: string;
  expertise: string;
  theme?: ThemeId;
}

export interface Milestone {
  label: string;
  /** ISO dates (YYYY-MM-DD). `end` is set for multi-day periods. */
  start: string;
  end?: string;
}

export interface Call {
  title: string;
  summary: string;
  /** Last application deadline; after this day the call is shown as closed. */
  closesOn: string;
  milestones: Milestone[];
  applyUrl: string;
  detailsUrl: string;
  inclusion: string;
}

export interface Benefit {
  title: string;
  text: string;
}

export interface Partner {
  name: string;
  logo: string;
  width: number;
  height: number;
}

export interface Contact {
  email: string;
  address: string[];
}

export interface HomeContent {
  lab: Lab;
  nav: NavItem[];
  vision: VisionPillar[];
  themes: ResearchTheme[];
  leadership: Person[];
  call: Call;
  benefits: Benefit[];
  collaboration: { text: string; href: string };
  partners: Partner[];
  contact: Contact;
  links: Record<"about" | "research" | "team" | "news" | "getInvolved" | "contact", string>;
}
