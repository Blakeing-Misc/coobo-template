import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    facebook?: string
    linkedin?: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Coobo Template",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Typography",
      href: "/typography",
    },
    {
      title: "Components",
      href: "/components",
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/company/coobo-media",
    facebook: "https://www.facebook.com/coobomedia",
  },
}
