import { Link, Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <section className="flex">
      <aside className="bg-amber-50 p-3">
        <h3 className="text-2xl text-cyan-400">this is aside</h3>
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
    </section>
  )
}
