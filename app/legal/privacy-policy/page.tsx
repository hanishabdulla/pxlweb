import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container px-4 py-12 md:px-6 md:py-24">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/legal" className="hover:text-foreground">
            Legal
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Privacy Policy</span>
        </nav>

        <div className="prose prose-gray max-w-none">
          <h1 className="mb-8 text-4xl font-bold tracking-tight">Privacy Policy</h1>

          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p>
              At Panatex Labs, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our services. Please read this
              privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access
              the site.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">2. Information We Collect</h2>
            <h3 className="mt-4 text-xl font-semibold">2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6">
              <li>Fill out forms on our website</li>
              <li>Create an account</li>
              <li>Sign up for our newsletter</li>
              <li>Request information about our services</li>
              <li>Contact us for support</li>
            </ul>

            <h3 className="mt-4 text-xl font-semibold">2.2 Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Access times</li>
              <li>Pages viewed</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6">
              <li>Providing and maintaining our services</li>
              <li>Improving our website and user experience</li>
              <li>Communicating with you about our services</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Protecting against unauthorized access</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal
              information. However, please note that no method of transmission over the internet or electronic storage
              is 100% secure.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">5. Third-Party Services</h2>
            <p>
              We may use third-party service providers to help us operate our business and the website or administer
              activities on our behalf. These parties may have access to your personal information only to perform these
              tasks on our behalf.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to our processing of your information</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">8. Children's Privacy</h2>
            <p>
              Our services are not intended for use by children under the age of 13. We do not knowingly collect
              personal information from children under 13.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="mt-4">
              <p>Panatex Labs</p>
              <p>123 Innovation Drive</p>
              <p>Tech City, TC 12345</p>
              <p>United States</p>
              <p>Email: privacy@panatexlabs.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

