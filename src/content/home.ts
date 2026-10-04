import type { HomeContent } from "./types";

// Every string below comes from the lab's current Google Site (October 2026).
// Wording is kept as published; long passages are shortened, never extended.
// Source pages are noted per section so the content can be checked or migrated.

const SITE = "https://sites.google.com/aait.edu.et/resonance-lab/home";

const links = {
  about: `${SITE}/about`,
  research: `${SITE}/research`,
  team: `${SITE}/team`,
  news: `${SITE}/news-events`,
  getInvolved: `${SITE}/get-involved`,
  contact: `${SITE}/contact`,
};

export const homeContent: HomeContent = {
  // Source: About ("Our Mission"), header title, Contact (address).
  lab: {
    shortName: "RESONANCE",
    name: "RESONANCE AI4D Lab",
    expansion: "Responsible AI Solutions and Networks for Sustainable Development",
    university: "Addis Ababa University",
    college: "College of Technology and Built Environment",
    motto: "Harnessing AI for Sustainable and Inclusive Development",
    mission:
      "We focus on creating ethical and scalable AI solutions tailored to Ethiopia's specific needs, advancing key Sustainable Development Goals (SDGs) across health, agriculture, governance, and energy.",
  },

  // Publications is left out until the page lists real publications
  // (it currently shows template entries); see ASSESSMENT.md, issue 2.
  nav: [
    { label: "About", href: links.about },
    { label: "Research", href: links.research },
    { label: "Team", href: links.team },
    { label: "News & Events", href: links.news },
    { label: "Get Involved", href: links.getInvolved },
    { label: "Contact", href: links.contact },
  ],

  // Source: Home ("Our Vision").
  vision: [
    {
      title: "Innovation Hub",
      text: "Positioning Ethiopia as a leader in Responsible AI for development, advancing key SDGs.",
    },
    {
      title: "Sustainable Solutions",
      text: "Creating ethical and scalable AI solutions tailored to Ethiopia's specific needs in health, agriculture, governance, and energy.",
    },
    {
      title: "Collaborative Ecosystem",
      text: "Fostering collaborations between academia, government, industry, and communities.",
    },
  ],

  // Source: Research (introduction).
  researchIntro:
    "Our interdisciplinary approach combines rigorous AI model development with participatory methods, ensuring our solutions are technically robust, ethically sound, and impactful for local communities.",

  // Source: Research ("Thematic Research Areas"); SDGs from About ("Alignment with SDGs").
  themes: [
    {
      id: "health",
      title: "Innovative Health Solutions",
      summary:
        "Developing AI-powered tools to improve healthcare access and outcomes, particularly in rural and underserved areas.",
      sdg: { number: 3, name: "Good Health & Well-being" },
    },
    {
      id: "agriculture",
      title: "Resilient Agriculture & Food Systems",
      summary:
        "Leveraging AI and IoT to enhance food security, improve productivity, and mitigate climate variability in agriculture.",
      sdg: { number: 2, name: "Zero Hunger" },
    },
    {
      id: "governance",
      title: "Inclusive Governance & Justice",
      summary:
        "Enhancing transparency, optimizing decision-making, and improving public service delivery through AI.",
      sdg: { number: 16, name: "Peace, Justice & Strong Institutions" },
    },
    {
      id: "energy",
      title: "Sustainable Energy & Climate Resilience",
      summary:
        "Designing AI-powered models to optimize energy forecasting, promote sustainable energy, and build climate resilience.",
      sdg: { number: 7, name: "Affordable & Clean Energy" },
    },
  ],

  // Source: Team (introduction).
  teamIntro:
    "The RESONANCE AI4D Lab is powered by a dedicated and diverse team of researchers, academics, and professionals committed to leveraging AI for sustainable development in Ethiopia.",

  // Source: Team ("Lab Leadership", "Thematic Leads", "Core Researchers"), in page order.
  // The Ethical Review Board and the six "To be recruited" roles are not people, so they are left out.
  team: [
    {
      name: "Dr. Fitsum Assamnew",
      role: "Lab Director / Principal Investigator",
    },
    {
      name: "Dr. Bisrat Derebssa",
      role: "Innovative Health Solutions Lead",
      theme: "health",
    },
    {
      name: "Dr. Beakal Gizachew",
      role: "Resilient Agriculture Lead",
      theme: "agriculture",
    },
    {
      name: "Dr. Henock Mulugeta",
      role: "Inclusive Governance Lead",
      theme: "governance",
    },
    {
      name: "Dr. Elefelious Getachew",
      role: "Sustainable Energy & Climate Resilience Lead",
      theme: "energy",
    },
    {
      name: "Dr. Menore Tekeba",
      role: "Core Researcher, Innovative Health Solutions",
      theme: "health",
    },
    {
      name: "Dr. Libsework Negash",
      role: "Core Researcher, Resilient Agriculture",
      theme: "agriculture",
    },
    {
      name: "Prof. Alemayehu Lemma",
      role: "Core Researcher, Resilient Agriculture",
      theme: "agriculture",
    },
    {
      name: "Dr. Biniam Tadesse",
      role: "Core Researcher, Inclusive Governance",
      theme: "governance",
    },
    {
      name: "Lea Mehari",
      role: "Core Researcher, Inclusive Governance",
      theme: "governance",
    },
    {
      name: "Dr. Dawit Habtu",
      role: "Core Researcher, Sustainable Energy",
      theme: "energy",
    },
  ],

  // Source: Get Involved › Application 2025/26 and News & Events (same dates on both).
  call: {
    title: "Call for Applications 2025/26",
    summary:
      "Funded Masters and PhD research positions for new and currently enrolled students, focusing on Health, Agriculture, Governance, and Energy & Climate.",
    closesOn: "2025-08-11",
    milestones: [
      { label: "Application deadline: Masters", start: "2025-07-28" },
      { label: "Application deadline: PhD", start: "2025-08-11" },
      { label: "Shortlisting & assessment", start: "2025-08-12", end: "2025-08-18" },
      { label: "Interviews", start: "2025-08-20", end: "2025-08-25" },
      { label: "Final selection & offers", start: "2025-08-29" },
      { label: "Program commencement", start: "2025-09-12" },
    ],
    applyUrl: "https://forms.gle/aaA23pZLkq8SzsnU7",
    detailsUrl: `${SITE}/get-involved/application-202526`,
  },

  // Source: Home ("Our Partners"). Logos are the files the lab already publishes.
  partners: [
    {
      name: "Artificial Intelligence for Development (AI4D)",
      logo: "/images/partners/ai4d.webp",
      width: 270,
      height: 96,
    },
    {
      name: "International Development Research Centre (IDRC·CRDI), Canada",
      logo: "/images/partners/idrc-crdi-canada.webp",
      width: 257,
      height: 112,
    },
    {
      name: "UK International Development",
      logo: "/images/partners/uk-international-development.webp",
      width: 357,
      height: 96,
    },
  ],

  // Source: Contact ("Our Contact Details"). The phone number is omitted
  // because the site only shows a placeholder (+251 XXX XXX XXXX).
  contact: {
    email: "resonance@aau.edu.et",
    address: [
      "College of Technology and Built Environment",
      "Addis Ababa University",
      "King George VI St, P.O. Box 385",
      "Addis Ababa, Ethiopia",
    ],
  },

  links,
};
