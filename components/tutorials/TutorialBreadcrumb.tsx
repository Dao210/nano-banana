import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { TutorialData } from "@/types/tutorial"

interface TutorialBreadcrumbProps {
  tutorial: TutorialData
}

export function TutorialBreadcrumb({ tutorial }: TutorialBreadcrumbProps) {
  return (
    <div className="border-b bg-muted/30">
      <div className="container py-3">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/tutorials" className="hover:text-foreground transition-colors">
            Tutorials
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{tutorial.title}</span>
        </nav>
      </div>
    </div>
  )
}
