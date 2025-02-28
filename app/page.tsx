import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProjectsGrid from "@/components/projects-grid"
import ClientsSection from "@/components/clients-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Innovation in Motion.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Panatex Labs creates cutting-edge robotics and technology solutions that transform industries and
                    shape tomorrow.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/projects"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  >
                    View Products
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-[#3CD1E9] via-[#3B99E8] to-[#125D89] opacity-10 blur-3xl"></div>
                  </div>
                  <div className="relative z-10 flex h-full w-full items-center justify-center">
                    <svg
                      className="h-48 w-48 md:h-64 md:w-64"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="45" stroke="#3CD1E9" strokeWidth="2" />
                      <circle cx="50" cy="50" r="35" stroke="#3B99E8" strokeWidth="2" />
                      <circle cx="50" cy="50" r="25" stroke="#125D89" strokeWidth="2" />
                      <path d="M30 50H70" stroke="#125D89" strokeWidth="2" strokeLinecap="round" />
                      <path d="M50 30V70" stroke="#125D89" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
                <p className="max-w-[600px] text-muted-foreground">
                  Explore our innovative robotics and AI solutions.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#3B99E8] hover:underline"
              >
                View all projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ProjectsGrid featured={true} />
          </div>
        </section>

        {/* Clients Section */}
        <ClientsSection />

        {/* About Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Panatex Labs</h2>
                  <p className="max-w-[600px] text-muted-foreground">
                    Founded on the principles of innovation and excellence, Panatex Labs is at the forefront of robotics
                    and technology development.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Our team of engineers, designers, and researchers work collaboratively to create solutions that
                    address complex challenges across industries. With a focus on precision, reliability, and
                    cutting-edge technology, we deliver products that exceed expectations.
                  </p>
                  <p>
                    At Panatex Labs, we believe in the transformative power of technology to improve lives and drive
                    progress. Our commitment to innovation is matched only by our dedication to quality and customer
                    satisfaction.
                  </p>
                </div>
                <div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#3B99E8] hover:underline"
                  >
                    Learn more about us <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-8">
                      <div className="h-32 w-32 rounded-lg bg-[#3CD1E9]/10"></div>
                      <div className="h-32 w-32 rounded-lg bg-[#3B99E8]/10"></div>
                      <div className="h-32 w-32 rounded-lg bg-[#125D89]/10"></div>
                      <div className="h-32 w-32 rounded-lg bg-black/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

