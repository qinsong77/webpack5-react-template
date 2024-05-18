import { Link } from 'react-router-dom'
import { GithubIcon, RssIcon } from 'lucide-react'

import { ThemeToggle } from '@/components/ThemeToggle'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils'

import { siteConfig } from '../../config'

import { MainNav } from './main-nav'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex min-h-16 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MainNav />
      <nav className="flex flex-1 items-center justify-end space-x-2">
        <Link
          to={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-9 px-0'
            )}
          >
            <GithubIcon className="size-4" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link
          to={siteConfig.links.blog}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-9 px-0'
            )}
          >
            <RssIcon className="size-3 fill-current" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}
