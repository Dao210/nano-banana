import { SECTION_GRADIENTS, type SectionGradient } from "@/types/tutorial"
import type { LucideIcon } from "lucide-react"

interface TutorialSectionProps {
  id: string
  title: string
  icon: LucideIcon
  iconBgColor: string // e.g., "bg-cyan-500", "bg-primary"
  gradient: SectionGradient
  children: React.ReactNode
}

export function TutorialSection({
  id,
  title,
  icon: Icon,
  iconBgColor,
  gradient,
  children,
}: TutorialSectionProps) {
  const gradientClass = SECTION_GRADIENTS[gradient]

  return (
    <section id={id} className={`${gradientClass} p-8 rounded-xl border`}>
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}

// ============================================
// Section Content Helper Components
// ============================================

interface ProInsightProps {
  children: React.ReactNode
}

export function ProInsight({ children }: ProInsightProps) {
  return (
    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
      <p className="text-sm font-medium text-primary mb-1">Pro Insight</p>
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  )
}

interface SectionCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function SectionCard({ title, children, className = "" }: SectionCardProps) {
  return (
    <div className={`bg-white p-6 rounded-lg border ${className}`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      {children}
    </div>
  )
}

interface GradientBoxProps {
  gradient: string // e.g., "from-green-50 to-emerald-50"
  borderColor: string // e.g., "border-green-500"
  children: React.ReactNode
  badge?: string
  badgeClass?: string
}

export function GradientBox({
  gradient,
  borderColor,
  children,
  badge,
  badgeClass = "bg-green-500",
}: GradientBoxProps) {
  return (
    <div
      className={`bg-gradient-to-r ${gradient} p-6 rounded-lg border-l-4 ${borderColor}`}
    >
      {badge && (
        <span className={`inline-block px-2 py-1 text-xs text-white rounded mb-3 ${badgeClass}`}>
          {badge}
        </span>
      )}
      {children}
    </div>
  )
}

interface MistakeCardProps {
  number: number
  title: string
  description: string
  solution: string
}

export function MistakeCard({ number, title, description, solution }: MistakeCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-semibold text-red-700 mb-3">
        Mistake #{number}: {title}
      </h3>
      <p className="text-muted-foreground mb-3">{description}</p>
      <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
        <p className="text-sm text-green-700">
          <strong>Solution:</strong> {solution}
        </p>
      </div>
    </div>
  )
}

interface BestPracticeCardProps {
  number: number
  title: string
  description: string
  color: "blue" | "green" | "purple" | "orange" | "red" | "cyan"
}

export function BestPracticeCard({
  number,
  title,
  description,
  color,
}: BestPracticeCardProps) {
  const colorMap = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
    orange: { bg: "bg-orange-100", text: "text-orange-600" },
    red: { bg: "bg-red-100", text: "text-red-600" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-600" },
  }

  const colors = colorMap[color]

  return (
    <div className="bg-white p-4 rounded-lg border">
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        <div
          className={`w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center`}
        >
          <span className={`text-xs font-bold ${colors.text}`}>{number}</span>
        </div>
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
