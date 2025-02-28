"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectsGrid({ featured = false }: { featured?: boolean }) {
  const [filter, setFilter] = useState<string | null>(null)

  const categories = Array.from(new Set(projects.map((project) => project.category)))

  const filteredProjects = featured
    ? projects.filter((project) => project.featured).slice(0, 3)
    : filter
      ? projects.filter((project) => project.category === filter)
      : projects

  return (
    <div className="space-y-8 mt-8">
      {!featured && (
        <div className="flex flex-wrap gap-2">
          <Button variant={filter === null ? "default" : "outline"} size="sm" onClick={() => setFilter(null)}>
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md"
          >
            <div className="aspect-video w-full overflow-hidden bg-gray-100">
              <div className="h-full w-full bg-gradient-to-br from-[#3CD1E9]/10 via-[#3B99E8]/10 to-[#125D89]/10 flex items-center justify-center">
                <div className="text-6xl font-bold text-[#125D89]/20">{project.title.charAt(0)}</div>
              </div>
            </div>
            <div className="p-4">
              <Badge variant="outline" className="mb-2">
                {project.category}
              </Badge>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{project.date}</span>
                <span className="flex items-center gap-1 text-sm font-medium text-[#3B99E8]">
                  View project <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

