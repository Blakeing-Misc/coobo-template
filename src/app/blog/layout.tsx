import { SiteHeader } from "@/components/site-header"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <SiteHeader />
      {children}
    </main>
  )
}
