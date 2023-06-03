import { RouterProvider } from 'react-router-dom'

import { routers } from '@/routes'

const App = () => {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
