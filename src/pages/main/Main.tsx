import { Link, Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <article>
      <aside>
        <ul>
          <li>
            <Link to="/main">main</Link>
          </li>
          <li>
            <Link to="/main/article">article</Link>
          </li>
          <li>
            <Link to="/main/list/1">article list one</Link>
          </li>
          <li>
            <Link to="/main/profile">profile</Link>
          </li>
        </ul>
      </aside>
      <Outlet />
    </article>
  )
}
