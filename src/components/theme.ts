import type { ComponentType, SVGProps } from "react";
import type { ThemeId } from "@/content/types";
import { EnergyIcon, GovernanceIcon, HealthIcon, WheatIcon } from "./Icons";

// The current site's theme colour-coding, as static class names for Tailwind.
export const themeStyles: Record<
  ThemeId,
  {
    tint: string;
    text: string;
    dot: string;
    border: string;
    ring: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
  }
> = {
  health: {
    tint: "bg-health-tint",
    text: "text-health",
    dot: "bg-health",
    border: "border-t-health",
    ring: "ring-health/25",
    Icon: HealthIcon,
  },
  agriculture: {
    tint: "bg-agriculture-tint",
    text: "text-agriculture",
    dot: "bg-agriculture",
    border: "border-t-agriculture",
    ring: "ring-agriculture/25",
    Icon: WheatIcon,
  },
  governance: {
    tint: "bg-governance-tint",
    text: "text-governance",
    dot: "bg-governance",
    border: "border-t-governance",
    ring: "ring-governance/25",
    Icon: GovernanceIcon,
  },
  energy: {
    tint: "bg-energy-tint",
    text: "text-energy",
    dot: "bg-energy",
    border: "border-t-energy",
    ring: "ring-energy/25",
    Icon: EnergyIcon,
  },
};
