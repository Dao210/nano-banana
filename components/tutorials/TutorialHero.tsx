import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { getIconByName, type TutorialData } from "@/types/tutorial"

interface TutorialHeroProps {
  tutorial: TutorialData
}

export function TutorialHero({ tutorial }: TutorialHeroProps) {
  const BadgeIcon = tutorial.hero.badgeIcon
    ? getIconByName(tutorial.hero.badgeIcon) || Sparkles
    : Sparkles

  return (
    <div
      className={`relative h-64 md:h-80 ${tutorial.hero.gradientColors} overflow-hidden`}
    >
      <Image
        src={tutorial.hero.image}
        alt={tutorial.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <Badge className="mb-2 bg-primary/90 text-primary-foreground">
          <BadgeIcon className="h-3 w-3 mr-1" />
          {tutorial.hero.badge}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
          {tutorial.title}
        </h1>
      </div>
    </div>
  )
}
