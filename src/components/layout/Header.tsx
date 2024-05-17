import { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { ThemeToggle } from '@/components/ThemeToggle'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils'

const Header: FC<{ className: string }> = ({ className }) => {
  return (
    <header className={clsx(className, 'flex place-content-between')}>
      <h5 className="text-xl text-blue-700">Webpack5 React Application</h5>
      <ul className="flex">
        <li>
          <Link
            className={cn(buttonVariants({ variant: 'link' }))}
            to="/main"
          >
            main
          </Link>
        </li>
        <li>
          <Link
            className={cn(buttonVariants({ variant: 'link' }))}
            to="/main/article"
          >
            main article
          </Link>
        </li>
        <li>
          <Link
            className={cn(buttonVariants({ variant: 'link' }))}
            to="/introduce"
          >
            introduce
          </Link>
        </li>
        <li>
          <Link
            className={cn(buttonVariants({ variant: 'link' }))}
            to="/form-demo"
          >
            form demo
          </Link>
        </li>
        <li>
          <Link
            className={cn(buttonVariants({ variant: 'link' }))}
            to="/loader-location/290"
          >
            router loader
          </Link>
        </li>
        <li>
          <Link
            className={cn(buttonVariants({ variant: 'link' }))}
            to="/loader-defer-location/290"
          >
            router defer
          </Link>
        </li>
        <li>
          <Link
            className={cn(buttonVariants({ variant: 'link' }))}
            to="/payment"
          >
            payment
          </Link>
        </li>
        <li>
          <Link
            className={cn(buttonVariants({ variant: 'link' }))}
            to="/"
          >
            home
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </header>
  )
}

export default Header
