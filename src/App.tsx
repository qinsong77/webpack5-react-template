import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ThemeProvider } from './providers'
import { routers } from './routes'

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routers} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App
