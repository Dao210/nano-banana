import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { TutorialData } from "@/types/tutorial"

interface TutorialNavProps {
  tutorial: TutorialData
}

export function TutorialNav({ tutorial }: TutorialNavProps) {
  const { prev, next } = tutorial.navigation

  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t">
      {prev ? (
        <Link href={prev.href}>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <ChevronLeft className="h-4 w-4" />
            {prev.label}
          </Button>
        </Link>
      ) : (
        <Link href="/tutorials">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <ChevronLeft className="h-4 w-4" />
            All Tutorials
          </Button>
        </Link>
      )}

      {next && (
        <Link href={next.href}>
          <Button className="flex items-center gap-2">
            {next.label}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  )
}
