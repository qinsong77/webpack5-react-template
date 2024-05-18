import { Link, Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <section className="flex">
      <aside className="bg-secondary p-2 md:p-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          This is aside
        </h3>
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
      <div className="p-2 md:p-4">
        <Outlet />
      </div>
    </section>
  )
}
