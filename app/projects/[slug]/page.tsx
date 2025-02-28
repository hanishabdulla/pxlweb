export const runtime = 'edge';
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#3B99E8] hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to projects
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{project.title}</h1>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
                <div className="space-y-4">
                  <p>{project.description}</p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {project.link && (
                  <div>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-[#125D89] px-8 text-sm font-medium text-white transition-colors hover:bg-[#125D89]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#125D89]"
                    >
                      View Project
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-full bg-gradient-to-br from-[#3CD1E9]/10 via-[#3B99E8]/10 to-[#125D89]/10 flex items-center justify-center">
                      <div className="text-6xl font-bold text-[#125D89]/20">{project.title.charAt(0)}</div>
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

