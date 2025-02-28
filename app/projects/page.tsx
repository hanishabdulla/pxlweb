import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectsGrid from "@/components/projects-grid"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Projects</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explore our innovative robotics and technology solutions.
              </p>
            </div>
            <div className="mt-8">
              <ProjectsGrid />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

