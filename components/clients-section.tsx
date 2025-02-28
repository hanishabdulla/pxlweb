"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Sample client data - 6 total clients
const clientsData = [
  { id: 1, name: "Qatar University", logo: "/qatar-university.svg" },
  { id: 2, name: "Voltaat", logo: "/voltaat.png" },
  { id: 3, name: "Jarir Bookstore", logo: "/clients/jarir.svg" },
  { id: 4, name: "DHL", logo: "/dhl.svg" },
  { id: 5, name: "Birla Public School", logo: "/clients/birla.svg" },
  { id: 6, name: "Qatar National Library", logo: "/clients/qnl.svg" },
]

export default function ClientsSection() {
  const [activeClients, setActiveClients] = useState<typeof clientsData>([])
  const [isAnimating, setIsAnimating] = useState(false)

  // Initialize with first 5 clients
  useEffect(() => {
    setActiveClients(clientsData.slice(0, 5))
  }, [])

  // Rotate clients every 3 seconds
  useEffect(() => {
    if (activeClients.length === 0) return

    const interval = setInterval(() => {
      if (!isAnimating) {
        rotateClients()
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [isAnimating, activeClients.length])

  const rotateClients = () => {
    if (activeClients.length === 0) return

    setIsAnimating(true)

    // Find the next client to show
    const currentLastId = activeClients[activeClients.length - 1].id
    const nextClientId = currentLastId === clientsData.length ? 1 : currentLastId + 1
    const nextClient = clientsData.find((client) => client.id === nextClientId)!

    // Remove first client and add next client to the end
    setActiveClients((prev) => [...prev.slice(1), nextClient])

    // Reset animation flag after transition
    setTimeout(() => {
      setIsAnimating(false)
    }, 700)
  }

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Clients</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Trusted by leading companies across industries.
            </p>
          </div>

          <div className="relative w-full max-w-5xl overflow-hidden py-8">
            <div className="flex justify-center gap-8">
              <AnimatePresence mode="popLayout">
                {activeClients.map((client, index) => (
                  <motion.div
                    key={client.id}
                    initial={index === 4 ? { x: 100, opacity: 0 } : false}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.32, 0.72, 0, 1],
                      opacity: { duration: 0.5 },
                    }}
                    className="flex-shrink-0"
                  >
                                    <div className="h-24 w-40 flex items-center justify-center transition-all duration-300">
                                      {client.logo ? (
                                        <Image 
                                          src={client.logo} 
                                          alt={`${client.name} logo`} 
                                          width={120} 
                                          height={60} 
                                          className="object-contain"
                                        />
                                      ) : (
                                        <div className="text-lg font-bold text-gray-500">{client.name}</div>
                                      )}
                                    </div>
                                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-[#3CD1E9] via-[#3B99E8] to-[#125D89]"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-gray-200"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

