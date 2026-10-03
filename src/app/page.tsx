import { Hero } from "@/components/Hero";
import { JoinBanner } from "@/components/JoinBanner";
import { Leadership } from "@/components/Leadership";
import { Partners } from "@/components/Partners";
import { ResearchThemes } from "@/components/ResearchThemes";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Vision } from "@/components/Vision";
import { getHomeContent } from "@/lib/content";

export default async function Home() {
  const content = await getHomeContent();

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-brand-900 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to main content
      </a>
      <SiteHeader lab={content.lab} nav={content.nav} />
      <main id="main">
        <Hero lab={content.lab} themes={content.themes} researchHref={content.links.research} />
        <Vision lab={content.lab} vision={content.vision} />
        <ResearchThemes
          intro={content.researchIntro}
          themes={content.themes}
          researchHref={content.links.research}
        />
        <JoinBanner call={content.call} newsHref={content.links.news} email={content.contact.email} />
        <Leadership
          intro={content.teamIntro}
          people={content.leadership}
          teamHref={content.links.team}
        />
        <Partners partners={content.partners} />
      </main>
      <SiteFooter lab={content.lab} nav={content.nav} contact={content.contact} />
    </>
  );
}
