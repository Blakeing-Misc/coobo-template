import { SiteHeader } from "@/components/site-header"

export default function ColorsLayout({
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
