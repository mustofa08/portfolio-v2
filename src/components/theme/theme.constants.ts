import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import type { Theme } from "@/types/theme";

export type ThemeOption = {
  value: Theme;
  icon: LucideIcon;
  label: string;
};

export const themeOptions: ThemeOption[] = [
  {
    value: "light",
    icon: Sun,
    label: "Light",
  },
  {
    value: "system",
    icon: Monitor,
    label: "System",
  },
  {
    value: "dark",
    icon: Moon,
    label: "Dark",
  },
];
