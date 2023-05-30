import { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const Header: FC<{ className: string }> = ({ className }) => {
  return (
    <header className={clsx(className, 'flex place-content-between')}>
      <h5 className="red text-xl"> this is header</h5>
      <ul className="flex">
        <li>
          <Link to="/main">main</Link>
        </li>
        <li>
          <Link to="/main/article">main article</Link>
        </li>
        <li>
          <Link to="/introduce">introduce</Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
