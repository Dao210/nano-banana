import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface NextStepItem {
  title: string
  description: string
  href: string
  icon: LucideIcon
  iconBgColor: string // e.g., "bg-blue-100"
  iconColor: string // e.g., "text-blue-600"
  buttonText?: string
}

interface TutorialNextStepsProps {
  items: NextStepItem[]
}

export function TutorialNextSteps({ items }: TutorialNextStepsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <div
              className={`w-10 h-10 ${item.iconBgColor} rounded-lg flex items-center justify-center mb-2`}
            >
              <item.icon className={`h-5 w-5 ${item.iconColor}`} />
            </div>
            <CardTitle className="text-lg">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
            <Link href={item.href}>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                {item.buttonText || "Start Learning"}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

interface PracticeChallengeProps {
  challenges: {
    level: "Basic" | "Intermediate" | "Advanced"
    description: string
  }[]
}

export function PracticeChallenge({ challenges }: PracticeChallengeProps) {
  return (
    <div className="mt-8 p-6 bg-white rounded-lg border">
      <h3 className="font-semibold mb-3">Practice Challenge</h3>
      <p className="text-muted-foreground mb-4">
        Ready to test your skills? Try these progressively challenging exercises:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        {challenges.map((challenge, index) => (
          <li key={index}>
            <strong>{challenge.level}:</strong> {challenge.description}
          </li>
        ))}
      </ol>
    </div>
  )
}
