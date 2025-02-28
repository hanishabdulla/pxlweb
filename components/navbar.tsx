"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <span className="hidden font-bold sm:inline-block">Panatex Labs</span>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-sm font-medium transition-colors hover:text-[#3B99E8]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-sm font-medium transition-colors hover:text-[#3B99E8]">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-[#3B99E8]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-[#3B99E8]">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
          >
            Get in Touch
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-[#3B99E8]"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-lg font-medium transition-colors hover:text-[#3B99E8]"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium transition-colors hover:text-[#3B99E8]"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium transition-colors hover:text-[#3B99E8]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-black px-6 text-sm font-medium text-white transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

