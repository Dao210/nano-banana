import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Clock, Eye, Share2, Bookmark, Download, Target } from "lucide-react"
import { CATEGORY_COLORS, type TutorialData } from "@/types/tutorial"

interface TutorialHeaderProps {
  tutorial: TutorialData
}

export function TutorialHeader({ tutorial }: TutorialHeaderProps) {
  const categoryColor = CATEGORY_COLORS[tutorial.category]
  const authorInitials = tutorial.author.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className="mb-8">
      {/* Stats Row */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge variant="secondary" className={`${categoryColor.bg} ${categoryColor.text}`}>
          <Target className="h-3 w-3 mr-1" />
          {tutorial.category}
        </Badge>
        <div className="flex items-center text-sm text-muted-foreground">
          <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
          {tutorial.rating} ({tutorial.ratingCount} reviews)
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          {tutorial.readTime}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Eye className="h-4 w-4 mr-1" />
          {tutorial.views} views
        </div>
      </div>

      {/* Description */}
      <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
        {tutorial.description}
      </p>

      {/* Author and Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-card rounded-lg border">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={tutorial.author.avatar}
              alt={tutorial.author.name}
            />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {authorInitials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-lg">{tutorial.author.name}</div>
            <div className="text-sm text-muted-foreground">{tutorial.author.bio}</div>
            <div className="text-sm text-muted-foreground">
              {tutorial.author.followers} followers • {tutorial.author.expertise}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            PDF
          </Button>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tutorial.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-xs hover:bg-primary/10 transition-colors"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}
