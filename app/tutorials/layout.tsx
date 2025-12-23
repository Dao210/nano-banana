import type React from "react"
import AdSense from "@/components/adsense"

export default function TutorialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* AdSense only loads on /tutorials pages */}
      <AdSense />
      {children}
    </>
  )
}
