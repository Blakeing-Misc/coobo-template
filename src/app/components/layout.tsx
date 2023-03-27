import { SiteHeader } from "@/components/site-header"

export default function ComponentsLayout({
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
