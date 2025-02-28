import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container px-4 py-12 md:px-6 md:py-24">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Legal Information</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/legal/privacy-policy"
            className="group rounded-lg border p-6 transition-colors hover:border-[#3B99E8] hover:bg-gray-50"
          >
            <h2 className="mb-2 text-2xl font-bold">Privacy Policy</h2>
            <p className="text-muted-foreground">
              Learn about how we collect, use, and protect your personal information.
            </p>
            <div className="mt-4 flex items-center text-[#3B99E8]">
              Read more <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/legal/terms"
            className="group rounded-lg border p-6 transition-colors hover:border-[#3B99E8] hover:bg-gray-50"
          >
            <h2 className="mb-2 text-2xl font-bold">Terms of Service</h2>
            <p className="text-muted-foreground">Review our terms and conditions for using our services.</p>
            <div className="mt-4 flex items-center text-[#3B99E8]">
              Read more <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/legal/cookies"
            className="group rounded-lg border p-6 transition-colors hover:border-[#3B99E8] hover:bg-gray-50"
          >
            <h2 className="mb-2 text-2xl font-bold">Cookie Policy</h2>
            <p className="text-muted-foreground">Understand how we use cookies and similar technologies.</p>
            <div className="mt-4 flex items-center text-[#3B99E8]">
              Read more <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

