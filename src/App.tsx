import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { routers } from './routes'
// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers}></RouterProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
