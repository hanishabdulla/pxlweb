import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Panatex Labs</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Pioneering the future of robotics and technology.
              </p>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p>
                  At Panatex Labs, our mission is to develop innovative robotics and technology solutions that address
                  complex challenges and drive progress across industries. We are committed to pushing the boundaries of
                  what's possible and creating products that make a meaningful impact.
                </p>
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p>
                  We envision a future where advanced robotics and technology enhance human capabilities, improve
                  efficiency, and solve critical problems. Panatex Labs aims to be at the forefront of this
                  transformation, leading the way with groundbreaking research and development.
                </p>
                <h2 className="text-2xl font-bold">Our Values</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Innovation:</strong> We constantly seek new ideas and approaches.
                  </li>
                  <li>
                    <strong>Excellence:</strong> We strive for the highest quality in everything we do.
                  </li>
                  <li>
                    <strong>Collaboration:</strong> We believe in the power of teamwork and partnership.
                  </li>
                  <li>
                    <strong>Integrity:</strong> We conduct our business with honesty and transparency.
                  </li>
                  <li>
                    <strong>Impact:</strong> We measure our success by the positive change we create.
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Team</h2>
                <p>
                  Panatex Labs brings together a diverse team of engineers, designers, researchers, and business
                  professionals who share a passion for innovation. Our collaborative approach allows us to tackle
                  complex challenges from multiple perspectives, resulting in more comprehensive and effective
                  solutions.
                </p>
                <h2 className="text-2xl font-bold">Our Approach</h2>
                <p>
                  We follow a rigorous research and development process that combines scientific principles with
                  creative problem-solving. From initial concept to final product, we maintain a focus on user needs,
                  technical excellence, and practical implementation.
                </p>
                <h2 className="text-2xl font-bold">Our History</h2>
                <p>
                  Founded with a vision to revolutionize the robotics and technology landscape, Panatex Labs has grown
                  from a small startup to a recognized leader in the field. Our journey has been marked by breakthrough
                  innovations, strategic partnerships, and a relentless pursuit of excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

