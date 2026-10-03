import { Hero } from "@/components/Hero";
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
        <Hero lab={content.lab} researchHref={content.links.research} />
        <Vision vision={content.vision} />
      </main>
    </>
  );
}
