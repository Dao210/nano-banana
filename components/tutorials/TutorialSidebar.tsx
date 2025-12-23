import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, ImageIcon, Sparkles } from "lucide-react"
import { CATEGORY_COLORS, type TutorialData } from "@/types/tutorial"
import { formatTutorialDate } from "@/lib/tutorial-utils"

interface TutorialSidebarProps {
  tutorial: TutorialData
}

export function TutorialSidebar({ tutorial }: TutorialSidebarProps) {
  const categoryColor = CATEGORY_COLORS[tutorial.category]

  return (
    <aside className="lg:w-80 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Table of Contents */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {tutorial.tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-sm hover:text-primary transition-colors py-1 ${
                  item.level === 2 ? "font-medium" : "ml-4 text-muted-foreground"
                }`}
              >
                {item.title}
              </a>
            ))}
          </CardContent>
        </Card>

        {/* Tutorial Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tutorial Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Difficulty</span>
              <Badge
                variant="secondary"
                className={`${categoryColor.bg} ${categoryColor.text}`}
              >
                {tutorial.category}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Read Time</span>
              <span className="text-sm font-medium">{tutorial.readTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Views</span>
              <span className="text-sm font-medium">{tutorial.views}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Rating</span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-current text-yellow-500" />
                <span className="text-sm font-medium">{tutorial.rating}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Last Updated</span>
              <span className="text-sm font-medium">
                {formatTutorialDate(tutorial.updatedAt)}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Related Tutorials */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tutorial.relatedTutorials.map((related) => {
              const relatedCategoryColor = CATEGORY_COLORS[related.category]
              return (
                <Link
                  key={related.id}
                  href={`/tutorials/${related.id}`}
                  className="block"
                  title={`Read ${related.title} tutorial`}
                >
                  <div className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="h-6 w-6 text-primary/60" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm line-clamp-2 mb-1">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge
                          variant="outline"
                          className={`text-xs ${relatedCategoryColor.bg} ${relatedCategoryColor.text} border-0`}
                        >
                          {related.category}
                        </Badge>
                        <span>{related.readTime}</span>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-current text-yellow-500 mr-1" />
                          {related.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Stay Updated
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-primary-foreground/90 mb-4">
              Get the latest Nano Banana tutorials, tips, and AI image editing
              insights delivered weekly.
            </p>
            <Button variant="secondary" className="w-full">
              Subscribe Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </aside>
  )
}
