import type { ComponentType, SVGProps } from "react";
import type { ThemeId } from "@/content/types";
import { EnergyIcon, GovernanceIcon, HealthIcon, WheatIcon } from "./Icons";

// The current site's theme colour-coding, as static class names for Tailwind.
export const themeStyles: Record<
  ThemeId,
  {
    tint: string;
    text: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
  }
> = {
  health: {
    tint: "bg-health-tint",
    text: "text-health",
    Icon: HealthIcon,
  },
  agriculture: {
    tint: "bg-agriculture-tint",
    text: "text-agriculture",
    Icon: WheatIcon,
  },
  governance: {
    tint: "bg-governance-tint",
    text: "text-governance",
    Icon: GovernanceIcon,
  },
  energy: {
    tint: "bg-energy-tint",
    text: "text-energy",
    Icon: EnergyIcon,
  },
};
