import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@/components/Layout/Header'

export const Layout: FC = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header className="bg-gray-400 p-4" />

      <main className="flex-grow bg-gray-200">
        <Outlet />
      </main>
      <footer className="bg-slate-100 p-2 p-4 text-center text-xs text-slate-700">
        this is footer
      </footer>
    </div>
  )
}
