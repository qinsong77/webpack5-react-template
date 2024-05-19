import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { routers } from './pages/routers'
import { ThemeProvider } from './providers'

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={routers}
            fallbackElement={<p>loading route...</p>}
          />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App
