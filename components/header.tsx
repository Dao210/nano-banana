import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SearchDialog } from "./search-dialog"
import { MobileNav } from "./mobile-nav"

interface HeaderProps {
  currentPath?: string
}

function Header({ currentPath = "/" }: HeaderProps) {
  const isActive = (path: string) => currentPath === path

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
        {/* 左侧导航，与内容区左对齐 */}
        <nav className="hidden md:flex items-center space-x-6 flex-1 min-w-0">
          <Link
            href="/prompts"
            className={`text-sm font-medium transition-colors ${
              isActive("/prompts") || currentPath?.startsWith("/prompts") ? "text-primary" : "hover:text-primary"
            }`}
          >
            Prompts
          </Link>
          <Link
            href="/tutorials"
            className={`text-sm font-medium transition-colors ${
              isActive("/tutorials") || currentPath?.startsWith("/tutorials") ? "text-primary" : "hover:text-primary"
            }`}
          >
            Tutorials
          </Link>
          <Link
            href="/community"
            className={`text-sm font-medium transition-colors ${
              isActive("/community") ? "text-primary" : "hover:text-primary"
            }`}
          >
            Community
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${
              isActive("/about") ? "text-primary" : "hover:text-primary"
            }`}
          >
            About
          </Link>
        </nav>

        {/* 居中Logo，flex-shrink-0防止压缩 */}
        <div className="flex-shrink-0 flex items-center justify-center mx-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 flex items-center justify-center">
              <Image src="/banana.webp" alt="Logo" width={32} height={32} className="h-8 w-8" />
            </div>
            <span className="font-bold text-xl text-primary font-[family-name:var(--font-space-grotesk)]">
              NanoBanana.Fans
            </span>
          </Link>
        </div>

        {/* 右侧搜索和菜单，flex-1保证右对齐 */}
        <div className="flex items-center space-x-4 flex-1 justify-end min-w-0">
          <div className="hidden sm:block">
            <SearchDialog>
              <div className="relative cursor-pointer">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search tutorials..." className="pl-10 w-64 cursor-pointer" readOnly />
              </div>
            </SearchDialog>
          </div>
          <div className="sm:hidden">
            <SearchDialog>
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </SearchDialog>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export { Header }
export default Header
