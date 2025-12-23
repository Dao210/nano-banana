import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, Star, ThumbsUp } from "lucide-react"
import { DEFAULT_COMMENTS, type TutorialComment, type TutorialData } from "@/types/tutorial"

interface TutorialCommentsProps {
  tutorial: TutorialData
}

export function TutorialComments({ tutorial }: TutorialCommentsProps) {
  const comments = tutorial.comments || DEFAULT_COMMENTS

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Comments ({tutorial.ratingCount})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

interface CommentItemProps {
  comment: TutorialComment
}

function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="flex gap-4">
      <Avatar className="h-10 w-10">
        <AvatarFallback className={`${comment.author.bgColor} ${comment.author.textColor}`}>
          {comment.author.initials}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold">{comment.author.name}</span>
          <div className="flex">
            {Array.from({ length: comment.rating }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current text-yellow-500" />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{comment.date}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{comment.content}</p>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
            <ThumbsUp className="h-3 w-3 mr-1" />
            {comment.likes}
          </Button>
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
            Reply
          </Button>
        </div>
      </div>
    </div>
  )
}
