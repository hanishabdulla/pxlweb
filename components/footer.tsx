import Link from "next/link"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="font-bold">Panatex Labs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Pioneering the future of robotics and technology with innovative solutions.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-[#3B99E8]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-[#3B99E8]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-[#3B99E8]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#3B99E8]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#3B99E8]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#3B99E8]">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#3B99E8]">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#3B99E8]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy-policy" className="text-sm text-muted-foreground hover:text-[#3B99E8]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#3B99E8]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#3B99E8]">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Panatex Labs. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.youtube.com/@PanatexLabs" target = '_blank' className="text-muted-foreground hover:text-[#3B99E8]">
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="20"
                 height="20"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"
               >
                 <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.48 4 12 4 12 4s-6.48 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.52 20 12 20 12 20s6.48 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"></path>
                 <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://www.linkedin.com/company/panatexlabs" target = '_blank' className="text-muted-foreground hover:text-[#3B99E8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://x.com/PanatexLabs" target = '_blank' className="text-muted-foreground hover:text-[#3B99E8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/panatexlabs" target="_blank" className="text-muted-foreground hover:text-[#3B99E8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

