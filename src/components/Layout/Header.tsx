import { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const Header: FC<{ className: string }> = ({ className }) => {
  return (
    <header className={clsx(className, 'flex place-content-between')}>
      <h5 className="text-xl text-blue-700">Webpack5 React Application</h5>
      <ul className="link-list">
        <li>
          <Link
            className="link"
            to="/main"
          >
            main
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/main/article"
          >
            main article
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/introduce"
          >
            introduce
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/form-demo"
          >
            form demo
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/"
          >
            home
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
