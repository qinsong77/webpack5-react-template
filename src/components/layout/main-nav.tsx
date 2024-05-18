import { Link, useLocation } from 'react-router-dom'
import { Lollipop } from 'lucide-react'

import { cn } from '@/utils'

import { siteConfig } from '../../config'

export function MainNav() {
  const { pathname } = useLocation()

  return (
    <div className="mr-4 flex">
      <Link
        to="/"
        className="mr-6 flex items-center"
      >
        <Lollipop />
        <span className="ml-1 inline-block font-normal md:font-bold">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="hidden items-center gap-4 text-sm sm:flex lg:gap-6">
        <Link
          to="/main"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/main')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          main
        </Link>
        <Link
          to="/introduce"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/introduce')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          introduce
        </Link>
        <Link
          to="/payment"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/payment')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          payment
        </Link>
        <Link
          to="/form-demo"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/form-demo')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          form demo
        </Link>
        <Link
          to="/loader-defer-location/290"
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 2xl:block',
            pathname?.startsWith('/loader-defer-location')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          router defer
        </Link>
        <Link
          to="/loader-location/290"
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 2xl:block',
            pathname?.startsWith('/loader-location')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          router loader
        </Link>
        <Link
          to={siteConfig.links.repoGithub}
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 2xl:block'
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
