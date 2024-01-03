import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from './Footer'
import Header from './Header'

export const Layout: FC = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header className="bg-gray-50 p-4" />

      <main className="flex-grow p-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
