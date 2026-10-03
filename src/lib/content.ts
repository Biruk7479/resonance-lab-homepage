import { homeContent } from "@/content/home";
import type { HomeContent } from "@/content/types";

/**
 * Single entry point for homepage content.
 *
 * It is async on purpose: when the lab adopts a CMS, this function can fetch
 * from the CMS API at build time and the components will not need to change.
 */
export async function getHomeContent(): Promise<HomeContent> {
  return homeContent;
}
