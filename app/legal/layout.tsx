import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Information - Panatex Labs",
  description: "Legal information, privacy policy, terms of service, and other legal documents for Panatex Labs.",
}

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

